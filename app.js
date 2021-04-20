const express = require('express')
const app=express()
const port = process.env.PORT||8000;
const bodyParser = require('body-parser');
const moment = require('moment')
//const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.locals.moment = moment;

// EXPRESS SPECIFIC STUFF
app.use(express.static('public'))   //// For serving static files

//TEMPLATE ENGINE(ejs)
app.set('view engine','ejs')
app.set('views','./views') // Set the views directory

//Routes
app.use('/',require('./routes/news'))

//Listen to port 8000
app.listen(port,()=> console.log("started"))