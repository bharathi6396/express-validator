const express = require('express')
const router = express.Router()
const expressValidator = require('express-validator')
// const passwordValidator = require('password-validator')
router.use(express.json());

router.get('/users', function (req, res) {
  res.render('usersList')
})
router.post('/users', () => {

})
router.post('/users/add',
  (req, res) => {
    
  })
  router.get('/users/username', function (req, res) {
  const usernameParam = req.params.usernameParam
  res.json({
    username:usernameParam,

  })
  })
  

module.exports = router