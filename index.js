//package import
const express=require('express');  //constent for express and bodyparser
const bodyParser=require('body-parser');

const { mongoose }=require('./db.js');

var ClientController=require('./controllers/ClientController.js');

var app=express();
app.use(bodyParser.json());

app.listen(3000,() => console.log('server started at port : 3000'));

//client
app.use('/Client',ClientController);