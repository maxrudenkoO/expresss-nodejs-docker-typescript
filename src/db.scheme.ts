import { Sequelize, DataTypes } from "sequelize";
import { UserModel } from "auth/user.service";
import { ValueModel } from "values/value.service";
export const sequelize = new Sequelize("database", "username", "password", {
  dialect: "sqlite",
  storage: ":memory:"
});
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    password: DataTypes.STRING
  },
  { sequelize, modelName: "user" }
);
ValueModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: DataTypes.TEXT
  },
  { sequelize, modelName: "value" }
);
