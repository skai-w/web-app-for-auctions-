const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    nomItem:{
        type : String,
        required : true
    },
    etat:{
        type: String,
        default :"available"
    },
    motcle:{
        type : String,
        required : true
    },
    estim:{
        type : Number,
        required: true
    },
    image :{
        type : String,
          default :'https://geo.img.pmdstatic.net/fit/https.3A.2F.2Fi.2Epmdstatic.2Enet.2Fgeo.2F2021.2F02.2F03.2F55d09d0f-5b3a-41f4-bbfe-9e3acfd71d2a.2Ejpeg/1280x720/background-color/ffffff/quality/70/le-mexique-reclame-lannulation-dune-vente-aux-encheres-dobjets-prehispaniques-en-france.jpg'
    },
    description:{
        type: String ,
        required : true
        
    }
})
module.exports = mongoose.model('Item',itemSchema)

