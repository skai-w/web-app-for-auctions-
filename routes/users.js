const express = require('express')
const router = express.Router()
const UserCtrl = require('../controller/userctrl')
const ItemCtrl = require('../controller/itemctrl')

// dashboard Route
router.get('/',ItemCtrl.SearchItem)

// logout Route
router.get('/logout',UserCtrl.logoutMethod)

// register user Route
router.get('/register',UserCtrl.registerUser )

router.post('/', UserCtrl.registerMethod)

//login  route 
router.get('/login',UserCtrl.loginUser)

router.post('/login',UserCtrl.loginMethod)


module.exports = router
