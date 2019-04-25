var express = require('express');
var app = express();
var routes = express.Router();
var dotenv = require('dotenv').config();
var path = require('path');


app.set('views', path.join(__dirname, '/../client'));
app.use(express.static(path.join(__dirname, '/../client')));

app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(process.env.PORT,(err)=>{
    console.log(`Server starting on: ${process.env.PORT}`);
    if(err){throw err}});