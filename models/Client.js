//call pakage
const mongoose=require('mongoose');

var Client=mongoose.model('Client',{
    Nom:{ type :String},
    Prenom:{ type :String},
    Date:{ type :String},
    Adress:{ type :String}
});
module.exports={Client:Client};
//video at 21.27