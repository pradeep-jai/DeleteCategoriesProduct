/* load environment variables and DB connection*/
require('./config/config');
require('./models/db');

/* Grab our dependencies */
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

/* Require index.router file */
const routerIndex = require('./routes/index.router');


var app = express();

/* Middleware */
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api',routerIndex);

/* Server start */
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));