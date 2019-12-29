//implement router from express
const express = require('express');
var router=express.Router();

var { Client }=require('../models/Client.js');

//=>localhost:3000/Client/
//retrieve all clients
router.get('/',(req,res) =>{//req=request,res:response
    Client.find((err,docs)=>{
        if(!err){
            res.send(docs);//send the documents that we got from the db to us
        }
        else{
            console.log('error in retriving cliens :'+JSON.stringify(err,undefined,2));
        }
    });
});
module.exports=router;

//add client
router.post('/',(req,res) =>{
    //create object of client
    var clt=new Client({
        Nom:req.body.Nom,
        Prenom:req.body.Prenom,
        Date:req.body.Date,
        Adress:req.body.Adress
    });//save the client to db
    clt.save((err,docs)=>{
        if(!err){
            res.send(docs);//send the documents that we got from the db to us
        }
        else{
            console.log('error in saving cliens :'+JSON.stringify(err,undefined,2));
        }
    });
});


