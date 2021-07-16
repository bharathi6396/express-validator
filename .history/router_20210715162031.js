const express = require('express')
const router = express.Router()
// const expressValidator = require('express-validator')
// const passwordValidator = require('password-validator')

router.use(express.json());
router.get('/form', function (req, res) {
  res.render('form')
})
router.get('/user', function (req, res) {
  res.render('form')
})
module.exports = router