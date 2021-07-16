const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
// const passwordValidator = require('password-validator')

router.use(express.json());
router.get('/users', function (req, res) {
  res.render('users')
})

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
  router.get('/users/username', function (req, res) {
  const usernameParam = req.params.
  })
  

module.exports = router