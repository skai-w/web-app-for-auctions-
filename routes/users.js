const express = require('express')
const router = express.Router()
const User = require('../models/user')
const UserCtrl = require('../controller/userctrl')
const ItemCtrl = require('../controller/itemctrl')

//all users route
// dashboard Route
router.get('/',ItemCtrl.SearchItem)

// New user Route
router.get('/new',UserCtrl.registerUser )

// Create user Route
router.post('/', async (req, res) => {
   
  const user = new User({
    name: req.body.name ,
    surname: req.body.surname ,
    mail: req.body.mail ,
    psw: req.body.psw ,
    willaya: req.body.willaya
  })
  
     await user.save().then(item=>
       { console.log("done save")

        res.redirect('/users/login')}
     )
    // res.redirect(`authors/${newAuthor.id}`)
    
   
   .catch ()
   
})

//login  route 
router.get('/login',UserCtrl.loginUser)

router.post('/login',UserCtrl.loginMethod)


module.exports = router
