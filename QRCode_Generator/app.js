


const router = require('./src/routes/routes')
const express = require("express");
const app = express();
const bodyParser = require('body-parser')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Allow CORS
app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Method", "*");
  next();
});
//Routing the requests
router(app);

//Creating a HTTP express server on PORT 3000

app.listen(8000, ()=>{console.log('app listening')})
