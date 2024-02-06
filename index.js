const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport')
const session = require('express-session');
const dotenv=require('dotenv')

dotenv.config();

//start a new Express application
const app = express();

// connect to database
const PORT = 4000 || process.env.PORT;
require('./database/connect');

app.get('/', (req, res)=>{

res.status(200);
res.send("Welcome to root URL of Server");
});

// middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json({ limit: "52428800" }));
app.use(bodyParser.urlencoded({ limit: "52428800", extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({ resave: true, secret: process.env.JWT_SECRET, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

//EJS TEMPLATE
app.set('view engine', 'ejs');
app.set('views',path.join('views'))

//Get request
app.get('/home',(req, res)=>{
res.status(200).render('index')
});
//PORT
app.listen(PORT, (error) =>{
if(!error)
console.log("Server is Successfully Running, and App is listening on port "+ PORT)
else
console.log("Error occurred, server can't start", error);
}
);