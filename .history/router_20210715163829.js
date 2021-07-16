const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
// const passwordValidator = require('password-validator')

router.use(express.json());

router.post('/users/add',
  expressValidator.body('username').isString(),
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