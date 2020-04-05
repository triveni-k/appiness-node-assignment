const express = require('express');


const {
  save
} = require('../controllers/userController');
const router = express.Router();
const userErrHandler = require('../errHandler/userErrHandler');


router.post('/', async (req, res, next) => {
  try {
    await save(req.body);
    res.send({ success: true, message: 'user data save successfully'});
    next();
  } catch (err) {
    res.send(userErrHandler(err));
    next();
  }
});



module.exports = router;
