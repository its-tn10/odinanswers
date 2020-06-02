const User = require("../models/").users;
const Contact = require("../models/").contacts;

Contact.belongsTo(User, {foreignKey: 'user_id'});

exports.create = (req, res) => {
  const user_obj = { // user table fields
    username: req.body.username
  };

  User.create(user_obj).then(data => { // successfully created the user object, lets make the contact object
      const contact_obj = { // contact table fields
        user_id: data.id,
        phone_number: req.body.phone_number,
        email_address: req.body.email_address,
        preferred_contact_method: Number(req.body.preferred_contact_method)
      };

      Contact.create(contact_obj).then(contact_data => { // successfully made the contact object
        res.status(200).send({id: data.id});
      }). catch(err => {
        res.status(500).send({
          message:
            err.message
        });
      });

    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Contact.destroy({where: {user_id: id}}).then(rows => { // successfully removed the contact object, lets do the user object
    User.destroy({where: {id: id}}).then(user_rows => { // successfully removed the user object, output count of rows deleted (1)
      res.status(200).send({count: user_rows});
    }).catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
  }).catch(err => {
    res.status(500).send({
      message: err.message
    });
  });
};