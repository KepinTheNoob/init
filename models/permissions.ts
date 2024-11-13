"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "./connection";

interface PermissionsAttributes {
    id?: number;
    name: string;

    createdAt?: Date,
    updatedAt?: Date,
}

class Permissions extends Model<PermissionsAttributes> implements PermissionsAttributes {
    public id!: number;
    public name!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Permissions.init(
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
    },
    {
        sequelize: connection,
        modelName: "Permissions",
    }
);

export default Permissions;
