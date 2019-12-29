//implement router from express
const express = require('express');
var router=express.Router();

var { Reservation }=require('../models/Reservation.js');
//retrieve all clients
router.get('/',(req,res) =>{//req=request,res:response
    Reservation.find((err,docs)=>{
        if(!err){
            res.send(docs);//send the documents that we got from the db to us
        }
        else{
            console.log('error in retriving reservation :'+JSON.stringify(err,undefined,2));
        }
    });
});
module.exports=router;


