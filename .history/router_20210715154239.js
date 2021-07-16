const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
const passwordValidator = require('password-validator')

router.use(express.json());
router.get('/', function (req, res) {
  res.render('page2')
})
