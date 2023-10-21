import { config } from "dotenv";
config();

import connection from "../db/connection.js";
import { createServer } from "node:http";
import { Op } from "@sequelize/core";
import { Server } from "socket.io";
import express from "express";
import logger from "morgan";

const port = process.env.PORT ?? 3000;

const app = express();
const server = createServer(app);
const io = new Server(server, { connectionStateRecovery: {} });

io.on("connection", async (socket) => {
  console.log("Un usuario se conecto al servidor");

  socket.on("disconnect", () =>
    console.log("Un usuario se a desconectado del servidor")
  );

  socket.on("chat message", async (message) => {
    let result;
    try {
      result = await connection.Message.create({ content: message });
      console.log("Message stored succesfully");
      io.emit("chat message", message, result.dataValues.id);
    } catch (error) {
      console.error(error);
    }
  });

  if (!socket.recovered) {
    try {
      const results = await connection.Message.findAll({
        where: { id: { [Op.gt]: socket.handshake.auth.serverOffset ?? 0 } },
      });

      return results.forEach((row) => {
        socket.emit("chat message", row.dataValues.content, row.dataValues.id);
      });
    } catch (error) {
      console.error(error);
    }
  }
});

app.use(logger("dev"));
app.use(express.static(process.cwd() + "/public"));

app.get("/", (req, res) => {
  return res.sendFile(process.cwd() + "/client/index.html");
});

server.listen(port, () => {
  console.log(`Server listen port: ${port}`);
  console.log(`URL: http://localhost:${port}`);
});
