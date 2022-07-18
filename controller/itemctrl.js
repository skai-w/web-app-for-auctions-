const session = require('express-session')
const Item = require('../models/item')
const Offer =require('../models/offer')

exports.registerItem = (req, res) => {
    res.render('items/add', { item: new Item() ,session : req.session})
  }

exports.ajoutitem = async (req, res) => {
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
    
} 

exports.oneitem= async (req, res) => {
    try {
      const item = await Item.findById(req.params.id);
      res.render('items/displayitem',{ 
        item: item,
        session :req.session})
    } catch (err) {
      const para="erreur d'acces a la base de données"
      res.render('partials/errorMessage', {
        session : req.session, 
        para : para
      })
    }
  }
 

exports.SearchItem = async (req, res) => {
    
    let filter = {}
     if(req.query.motcle != null && req.query.motcle !==''){
        filter.motcle = new RegExp(req.query.motcle, 'i')
     }

     if(req.query.nomItem != null && req.query.nomItem !== ''){
      filter.nomItem = new RegExp(req.query.nomItem, 'i') 
    }
    if(req.query.estim != null && req.query.estim !==''){
      filter.estim = { $lt : req.query.estim} 
    }

    await Item.find(filter, function(err,rslt){
    
      if (err){console.log(err)
        const para="erreur d'acces a la base de données"
      res.render('partials/errorMessage', {
        session : req.session, 
        para : para
      })
      }
      else{
   
        res.render('items/displayall',{ 
          items: rslt,
          searchOptions: req.query,
          session :req.session})
        }
         
    
      }
    )
  }
    
  
  
  exports.ajoutoffre = async (req,res) => {
 
    const offer = new Offer({
      price :req.body.price,
      username : req.session.username.email ,
      obj : req.params.id
    })
  
  console.log("saved offre")
    await offer.save().then(async () => { 
      var ite = await Item.findById(req.params.id);
        console.log(ite)
           await Item.updateOne({_id : ite._id }, { etat : "Unavailable"});
      
      res.redirect('/items')})
    .catch ()
  }

  

