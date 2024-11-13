"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "./connection";

interface RolesAttributes {
    id?: number;
    name: string;
    app_id: number;

    createdAt?: Date,
    updatedAt?: Date,
}

class Roles extends Model<RolesAttributes> implements RolesAttributes {
    public id!: number;
    public name!: string;
    public app_id!: number;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Roles.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "Name required!",
          },
        },
      },
      app_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: {
            msg: "App id must be a number!",
          },
          notEmpty: {
            msg: "App id required",
          },
        },
      },
    },
    {
        sequelize: connection,
        modelName: "Roles",
    }
);

export default Roles;
