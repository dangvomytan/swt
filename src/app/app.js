const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");``
const createError = require("http-errors");
const app = express();
const Router = require('./router/');

// middleware

app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
// database

// route
Router(app);

//handleError
//gui api sai
app.use((req,res,next)=>{
  const errors = createError(404,'Not Found');
  next(errors);
})

//bat loi khi xu ly o controllers bi sai 
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err.message || 'Internal Server Error' });
});
module.exports = app;
