"use strict";
import { Model, DataTypes } from "sequelize";
import connection from "./connection";

interface PreferencesAttributes {
    id?: number;
    name: string;

    createdAt?: Date,
    updatedAt?: Date,
}

class Preferences extends Model<PreferencesAttributes> implements PreferencesAttributes {
    public id!: number;
    public name!: string;

    public readonly createdAt?: Date;
    public readonly updatedAt?: Date;
}

Preferences.init(
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
        modelName: "Preferences",
    }
);

export default Preferences;
