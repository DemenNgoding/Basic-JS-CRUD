const sequelize = require("sequelize");

const db = new sequelize("crud", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { db };
