const Sequelize = require("sequelize");
const config = require("../db.config.js");

const connection = new Sequelize(
  config.DB_NAME,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: "mysql",
    define: {timestamps: false}
  }
);

let db = {};
db.connection = connection;
db.users = require("./users.model.js")(connection);
db.contacts = require("./contacts.model.js")(connection);

module.exports = db;