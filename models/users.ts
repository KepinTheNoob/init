"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "./connection";

interface UsersAttributes {
    id?: number;
    email: string;
    password: string;

    createdAt?: Date,
    updatedAt?: Date,
}

class Users extends Model<UsersAttributes> implements UsersAttributes {
    public id!: number;
    public email!: string;
    public password!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Users.init(
    {
      email: {
        unique: {
          name: "email_unique",
          msg: "Email already used!",
        },
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Invalid email format!",
          },
          notEmpty: {
            msg: "Password required!",
          },
        },
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Password required!",
          },
        },
      },
    },
    {
        sequelize: connection,
        modelName: "Users",
    }
);

export default Users;
