import { Model, DataTypes } from "sequelize";

class Chat extends Model {
  static initModel(sequelize) {
    Chat.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "chat",
        paranoid: true,
      }
    );

    return Chat;
  }
}

export default Chat;
