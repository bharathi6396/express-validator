const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
const passwordValidator = require('password-validator')

router.use(express.json());
router.get('/page2', function (req, res) {
  res.render('page2')
})
