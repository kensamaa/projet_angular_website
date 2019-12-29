//package import
const mongoose=require('mongoose');
//making the connection
mongoose.connect('mongodb://localhost:27017/angular_project',(err)=>{
    if(!err)
        console.log('mongo connection succeded...');
    else
        console.log('error in connection: '+JSON.stringify(err,undefined,2));//convert the json to string
});
//export the const 
module.exports=mongoose;
