const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./users/users.controller'));

app.listen(3002, () => console.log('Server started'));