const express = require('express')
const { body } = require('express-validator');
const expressValidator = require('express-validator');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// START ROUTES

router.get('/users/add', (req, res) => {
  res.render('form'),
})
const userArray = ['Karl', 'Ranjith', 'Karthik']
router.get('/users/userlist', (req, res) => {
  res.render('userList', {
    userArray,
    userTab: [
      { user: 'username', email: 'email', age: 0, city: 'city' }
    ]
  })
})

router.get('/users/:username', (req, res) => {
  res.render('userProfile', {
    user: req.params.username
  })
})
router.all('*', (req, res) => {
  res.send('404 - Page Not Found')
})
//END ROUTES
module.exports = router