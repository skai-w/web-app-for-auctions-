const express = require('express')
const router = express.Router()
const Item = require('../models/item')
const ItemCtrl = require('../controller/itemctrl')
const session = require('express-session')


const Offer = require('../models/offer')

//router.get('/items/displayall',ItemCtrl.displayall)

//all items route
router.get('/',ItemCtrl.SearchItem)

// New book Route
router.get('/add',ItemCtrl.registerItem )

// to add new Item
router.post('/add', async (req, res) => {
  const objecto={
    nomItem: req.body.nomItem ,
    estim: req.body.estim,
    motcle : req.body.motcle,
    description: req.body.description ,
};
if(req.body.image){
  objecto.image=req.body.image;
}
const item=new Item(objecto); 

     await item.save().then(item=>
       { console.log("done save")

        res.redirect('/items')}
     )
 
   .catch ()
   
}) 


//pour afficher la page du live d'un item

//router.get('/Item/:id',ItemCtrl.showItem)


router.get("/displayitem/:id",ItemCtrl.oneitem);
router.post("/displayitem/:id",async (req,res) => {
 
  const offer = new Offer({
    price :req.body.price,
    username : req.session.username.email ,
    obj : req.params.id
  })
console.log("saved offre")
  await offer.save().then(item => { 
    res.redirect('/items')})
  .catch ()
})

router.get('/',(req, res) => {
  res.render('/items'), {offer : new Offer() , session : req.session}
})
  


module.exports = router