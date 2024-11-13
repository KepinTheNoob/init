"use strict";
import { Dialect, Sequelize } from "sequelize";

// Konfigurasi Sequelize dengan tipe yang sesuai
const sequelize: Sequelize = new Sequelize(
  "brac",       // Nama database
  "root",       // Username
  "",           // Password
  {
    host: "localhost",  // Ganti dengan IP atau nama domain jika diperlukan
    port: 3306,         // Port untuk koneksi
    dialect: "mysql" as Dialect,  // Dialek database
  }
);

export default sequelize;