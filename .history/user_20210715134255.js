const { body, validationResult } = require('express-validator');
.post(
  '/user',
  body('username').isLength({ min: 4 }),
  body('email').isEmail(),
  body('age').isLength({ max: 2 }),
 
 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.username,
      email: req.body.email,
      age: req.body.age,
    }).then(user => res.json(user));
  },
);