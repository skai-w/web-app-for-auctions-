const User = require('../models/user')

exports.registerUser = (req, res) => {
    res.render('users/new', { user: new User() ,session : req.session})
  }

exports.loginUser = (req, res) => {
  res.render('users/login',{session : req.session})
} 

exports.loginMethod = (req, res) => {
  User.find({mail : req.body.email,psw : req.body.password}, function(err,resultat){
    if(err){
      const para="erreur : impossible d'acceder a la base de données !"
      res.render('partials/errorMessage', {
        session : req.session,
        para : para
      })
    }else{
      
      if(resultat.length==0){
        const para="erreur : mdp ou email incorrect try again !"
        res.render('partials/errorMessage', {
          session : req.session,
          para : para
        })
      }else{
      req.session.userid = resultat[0]._id
      req.session.username = resultat[0] 
      req.session.isAuth = true
      req.session.type = 'user'
      res.redirect('/users')
      }
  }})
}

