// import basic modules
const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');

// security middleware import
// const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
// const xss = require('xss-clean');
const cors = require('cors');
const hpp = require('hpp');

// database import
const mongoose = require('mongoose');
const router = require('./src/routes/api');
app.use(express.static('client-side/build'));

// security middlewares implement
// app.use(rateLimit());
app.use(helmet());
app.use(mongoSanitize());
// app.use(xss());
app.use(cors());
app.use(hpp());

// body parser implement
app.use(bodyParser.json());

// mongodb database connection
const URL = 'mongodb+srv://crud:crud9900@cluster0.knhes.mongodb.net/?retryWrites=true&w=majority';
// const OPTION = { username : 'crud', password : 'crud9900', autoindex : true }

mongoose.connect(URL, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Connected!');
    }
});

// routing implement
app.use('/api/todo', router);

// add react front end routing
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-side', 'build', 'index.js'));
});



module.exports = app;

