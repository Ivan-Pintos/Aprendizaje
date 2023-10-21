import { Model, DataTypes } from "sequelize";

class Message extends Model {
  static initModel(sequelize) {
    Message.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "message",
        paranoid: true,
      }
    );

    return Message;
  }
}

export default Message;
