const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    surname:{
        type : String,
    },
    mail:{
        type : String,
        required : true
    },
    psw:{
        type : String,
        required : true
    }
 
})

module.exports = mongoose.model('User',userSchema)