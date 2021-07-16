const express = require('express')
const router = express.Router()
// const expressValidator = require('express-validator')
// const passwordValidator = require('password-validator')

router.use(express.json());
router.get('/form', function (req, res) {
  res.render('form')
})
router.get('/users', function (req, res) {
  res.render('users')
})
router.post('/users/signup',
  expressValidator.body('username').isEmail(),
  (req, res) => {
    console.info('J\'ai une soumission form')
    const errors = expressValidator.validationResult(req)
    if (!errors.isEmpty()) {
      res.json({ errors: errors.array() })
    } else {
      res.json({ success: true })
    }
  })

module.exports = router