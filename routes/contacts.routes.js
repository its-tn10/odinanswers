const router = require('express').Router();

const ContactController = require('../controllers/contacts.controller.js');

// Control the information of contact objects (along with its user object, mainly username)

router.get("/", ContactController.findAll);
router.get("/:id", ContactController.findOne);
router.post("/", ContactController.update)

module.exports = router;