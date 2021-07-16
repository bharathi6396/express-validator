const express = require('express');
const app = express();

app.use(express.json());
app.post('/user', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(user => res.json(user));
});