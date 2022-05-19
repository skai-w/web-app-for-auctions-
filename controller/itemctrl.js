const session = require('express-session')
const Item = require('../models/item')

exports.registerItem = (req, res) => {
    res.render('items/add', { item: new Item() ,session : req.session})
  }


exports.SearchItem = async (req, res) => {
    
    let filter = {}
     if(req.query.motcle != null && req.query.motcle !==''){
        filter.motcle = new RegExp(req.query.motcle, 'i')
     }

     if(req.query.nomItem != null && req.query.nomItem !== ''){
      filter.nomItem = new RegExp(req.query.nomItem, 'i') 
    }
   //affiche les items avec un prix plus bas que le prix entré
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
   
        res.render('items/index',{ 
          items: rslt,
          searchOptions: req.query,
          session :req.session})
        }
         
    
      }
    )
  }
    
    

 