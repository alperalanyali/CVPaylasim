const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotnev = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./routes/auth.js');
const developerType = require('./routes/developerType');
const programmingLanguages = require('./routes/programmingLanguage');
const questions = require("./routes/question");
const answers = require("./routes/answer");
var cors = require('cors')
const connectDatabase = require('./config/database');


app.use(cors())
let PORT = process.env.PORT || 3000;
app.use(bodyParser.json())
//Middleware
app.use(bodyParser.urlencoded({
    extended:true
}))
connectDatabase();
app.use(express.static('public'))
app.use(morgan('tiny'))
//Middleware
const apiURL = '/api/v1'

app.use(apiURL,auth);
app.use(apiURL,developerType);
app.use(apiURL,programmingLanguages);
app.use(apiURL,questions);
app.use(apiURL,answers);

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})

process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`);
    console.log('Shutting down the server due to uncaught exception');
    // process.exit(1)
})

const server = app.listen(PORT,()=>{
    console.log(`Server is started on port ${PORT}`);    
})
