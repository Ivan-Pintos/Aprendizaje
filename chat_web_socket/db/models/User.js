import { Model, DataTypes } from "sequelize";

class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
        paranoid: true,
      }
    );

    return User;
  }
  toJSON() {
    const user = { ...this.get() };
    delete user.password;
    return user;
  }
}

export default User;
