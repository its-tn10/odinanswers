const express = require("express");
const bodyParser = require("body-parser");

const usersRouter = require('./routes/users.routes.js');
const contactsRouter = require('./routes/contacts.routes.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/', usersRouter);
app.use('/', contactsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});