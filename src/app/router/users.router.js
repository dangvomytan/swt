const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/users.controller')

router.get('/',(req, res) => {
  res.json('ok')});

router.get('/login',UsersController.handleLogin);
module.exports = router;