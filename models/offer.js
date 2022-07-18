const mongoose = require('mongoose')

const offerSchema = new mongoose.Schema({
 
    username:{
        type: String,
        required :true
    },
    price:{
        type : Number,
        required : true
    },
    obj:{
        type: String,
        required :true
    }
})

module.exports = mongoose.model('Offer',offerSchema)

