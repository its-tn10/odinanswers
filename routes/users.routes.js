const router = require('express').Router();

const UserController = require('../controllers/users.controller.js');

// Control the creation and deletion of user objects (along with its contact object)
router.put("/", UserController.create);
router.delete("/:id", UserController.delete);

module.exports = router;