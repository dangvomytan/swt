const userRouter = require('./users.router');

function Routers(app)
     {
          app.use('/api/v1/users', userRouter);


          app.get('/',(req, res) =>{
               res.json({message:'Welcome to the API'});
          })
     }
     module.exports  = Routers;