const Sequelize = require("sequelize");

module.exports = (connection) => {
  const User = connection.define("user", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  }, {tableName: "users"});

  return User;
};