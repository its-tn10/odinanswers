const Sequelize = require("sequelize");

module.exports = (connection) => {
  const Contact = connection.define("contact", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    phone_number: { // assuming US phone number (7134979264)
      type: Sequelize.STRING,
      allowNull: false,
    },
    email_address: { 
      type: Sequelize.STRING,
      allowNull: false,
    },
    preferred_contact_method: { // 0 - phone ; 1 - email
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }, {tableName: "contacts"});

  return Contact;
};