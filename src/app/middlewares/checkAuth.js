const jwt =  require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');

const checkAuthentication = (req,res,next) => {
     const authHeader = req.header('Authorization')
     const token = authHeader && authHeader.split(" ")[1]
 
     if(!token) res.sendStatus(401)
     try {
         const decoded = jwt.verify(token,sceretKey)
         console.log("decoded",decoded);
        
         next()
     } catch (error) {
        return res.sendStatus(403)
     }
 }

module.exports = checkAuthentication;