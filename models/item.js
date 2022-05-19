const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  
    nomItem:{
        type : String,
        required : true
    },
    motcle:{
        type : String,
        required : true
    },
    //pas la peine d'ajouter num car mongo idir id direct
    estim:{
        type : Number,
        required: true
    },
    image :{
        type : String,
        default :'https://sciendo.com/_next/image?url=%2Fproduct-not-found.png&w=640&q=75'
    },
    description:{
        type: String ,
        required : true
        

    }

    
})

module.exports = mongoose.model('Item',itemSchema)