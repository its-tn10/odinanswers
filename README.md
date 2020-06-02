# Odin Answers Internship Application
This Node.js application is a RESTful API service that performs regular CRUD operations for a MySQL database.

User information such as their ID and usernames are stored in the table `users`.

All of the user's contact information are stored in the table `contacts`.

# MySQL Database
The .SQL file provided allows the individual to create the vital tables for a corresponding database as mentioned above. 


User IDs are a unique numerical identifier to a user that increments for each insertion. The user ID can be utilized to correspond to a username in the `users` table, where it is limited to 16 characters (since there wasn't an explicit format of the column).


Contact IDs occur the same way as User IDs for the table `contacts`. The user IDs in the table corresponds to the user IDs in the `users` table for future queries in obtaining an individual's username with their contact information. 

The `contacts` table contains a user's contact information. The phone number column is assumed to be a US-based telephone number with no dashes and straight up numbers (for example, 713497964). It is limited to 10 characters and is stored as a string to avoid numerical overflows. 

Additionally, email addresses can be provided. It is limited to 255 characters. Lastly, the preferred contact method is also a column that denotes the individual's contact preference, where 0 denotes the prefered use of their phone and 1 denotes the preferred use of their e-mail.

# Node.js Application
The Node.js application utilizes Express.js and Sequelize. I've been trying to familiarize myself with the Express.js framework for a while, but this was a first time in me utilizing it with MySQL instead of MongoDB. Nevertheless, I was fairly acquainted with using PHP and MySQL, and this was no different.

I mainly utilized Sequelize due to some familiarity with using the Mongoose ORM package when developing Express.js applications after researching packages to use, and has inspired some of the folders and file naming conventions.

**Routes**
* `GET /`: Returns a JSON array of JSON objects denoting all of the contact information and username of individuals stored in the database.
* `GET /:id`: Returns a JSON object denoting the contact information and username of a user row ID given.
* `POST /`: Changes the `preferred_contact_method` column of a user given the contact row ID and the new numerical contact method (0 or 1). Returns the number of rows updated (usually should be 1 if successful).
* `PUT /`: Creates row for the tables `users` and `contacts` given the values of the column names provided. Returns the newly created row's ID in the `users` table. 
* `DELETE /:id`: Given the user row ID, will delete the rows in `users` and `contacts` containing the user. Returns the number of rows in the `users` table deleted.
