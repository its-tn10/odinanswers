const Contact = require("../models/").contacts;
const User = require("../models/").users;

Contact.belongsTo(User, {foreignKey: 'user_id'});

exports.update = (req, res) => { // Assuming we're updating by contact row ID given
  const id = req.body.id;
  const preferred_contact_method = Number(req.body.preferred_contact_method);

  Contact.update({preferred_contact_method: preferred_contact_method},
    {where: {id: id}}).then(rows => {
      res.status(200).send({
        count: rows
      });
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Contact.findOne({where: {user_id: id}, include: [{model: User}]}).then(data => {
      if (data != null)
        res.send({contact_id: data.id, user_id: data.user_id, username: data.user.username, phone_number: data.phone_number, email_address: data.email_address, preferred_contact_method: data.preferred_contact_method});
      else
        res.status(404).send({
          message: "Cannot find user by ID"
        })
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findAll = (req, res) => {
  Contact.findAll({include: [{model: User}]}).then(data => {
      let contacts = []
      for (let i = 0; i < data.length; i++) 
        contacts.push({contact_id: data[i].id, user_id: data[i].user_id, username: data[i].user.username, phone_number: data[i].phone_number, email_address: data[i].email_address, preferred_contact_method: data[i].preferred_contact_method});
      
      res.send(contacts);
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};