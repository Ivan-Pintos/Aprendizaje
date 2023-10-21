import { config } from "dotenv";
config();
import { Sequelize } from "sequelize";
const sequelizeOptions = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_CONNECTION,
  logging: false,
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  sequelizeOptions
);

import Chat from "./models/Chat.js";
import User from "./models/User.js";
import Message from "./models/Message.js";

// User.initModel(sequelize);
// Chat.initModel(sequelize);
Message.initModel(sequelize);

// User.hasMany(Message);
// Message.belongsTo(User);

// Chat.hasMany(Message);
// Message.belongsTo(Chat);

export default { sequelize, Chat, Message, User };
