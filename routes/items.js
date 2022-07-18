const express = require('express')
const router = express.Router()
const ItemCtrl = require('../controller/itemctrl')
const session = require('express-session')
const Offer = require('../models/offer')

//all items route
router.get('/',ItemCtrl.SearchItem)

// to add new Item
router.get('/add',ItemCtrl.registerItem )

router.post('/add', ItemCtrl.ajoutitem) 


//pour afficher la page d'un items
router.get("/displayitem/:id",ItemCtrl.oneitem);

//pour ajouter une offre d'enchere 
router.post("/displayitem/:id",ItemCtrl.ajoutoffre)
 
 

router.get('/',(req, res) => {
  res.render('/items'), {offer : new Offer() , session : req.session}
})
  


module.exports = router