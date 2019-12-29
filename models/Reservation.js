const mongoose=require('mongoose');

var Reservation=mongoose.model('Reservation',{
    DateReservation:{ type :String},
    Classe:{ type :String},//maybe number
    Siege:{ type :String},
    EtatReservation:{ type :String}
});

module.exports=Reservation;