const User = require('../models/user')
const UserCtrl = require('../controller/userctrl')


exports.loginIN =(req,res)=>{
    res.render('sellers/login',{session : req.session})

}



exports.loginMethod = (req,res)=>{
        console.log('post')
      
    
        User.find({mail : req.body.email,psw : req.body.password}, function(err,resultat){
            if(err){
              console.log("not exist")
              const para="erreur : mdp ou email incorrect try again !"
              res.render('partials/errorMessage', {
                session : req.session,
                para : para
              })
            }else{
              req.session.userid = resultat[0]._id
              req.session.isAuth = true
              req.session.type = 'user'
              res.redirect('/users')
              }})
}




exports.logoutMethod =(req,res) => {
  req.session.destroy(function(err){
    if(err){
      console.log(err)
    }else{
    res.redirect('/')
      
    }
  })
}