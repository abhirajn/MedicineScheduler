const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    username : String,
    start : Date,
    end  : Date,
    time : String,
    name : String,
    frequency : Number
})



const Med = mongoose.model('Med' , medicineSchema);

module.exports={
    Med
}