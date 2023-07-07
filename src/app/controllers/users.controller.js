const userModel = require('../models/users.models');
const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const User = require('../models/users.models');
const bcrypt = require('bcryptjs');

class UsersController {
   //registers users
   async handleRegister(req, res) {
      // console.log((req.body));
      const { userName, password } = req.body;
      try {
         //Check xem đã có user trong database
         const checkUser = await userModel.findOne({ where: { userName } });
         if (checkUser) {
            return res.status(400).json({ message: 'user already exists' });
         }
         // Mã hoá password
         const salt = await bcrypt.genSaltSync(10);
         const hashPassword = await bcrypt.hash(password, salt);
         // Tạo mới user
         const result = await userModel.create({ ...req.body, password: hashPassword });
         res.status(200).json({ message: 'create success !', dsta: result });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error });
      }
   }

   //login users
   async handleLogin(req, res) {
     //  console.log(req.body);
     const { userName, password } = req.body;
      try {
         const user = await userModel.findOne({ where: {userName} });
         if (user) {
          const mypassword = await bcrypt.compare(password, user.password);
            const accessToken = jwt.sign(user.dataValues, sceretKey);
            res.status(200).json({
               data: user,
               accessToken: accessToken,
            });
         } else {
            res.status(404).json({ message: 'user not found' });
         }
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error });
      }
   }
   //get all users
   async handleGetAllUsers(req, res) {
      try {
         const userAll = await User.findAll();
         res.status(200).json({ data: userAll });
      } catch (error) {
         res.status(500).json({ message: 'error server' });
      }
   }
}

module.exports = new UsersController();
