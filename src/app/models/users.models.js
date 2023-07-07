const sequelize = require('../../libs/database/connect.db');
const {DataTypes} = require('sequelize');

// tao bang user
const User  = sequelize.define('User',{
     id:{
        type:  DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
     fullName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     userName:{
          type:  DataTypes.STRING,
          allowNull: false,
     },
     password:{
          type:  DataTypes.STRING,
          allowNull: false,
     }
     },
     {
          timestamps: false,
     });
     User.sync()
       .then(() => {
         console.log('Create successfully');
       })
       .catch((error) => {
         console.log('Error create table', error);
       });
     
     module.exports = User;