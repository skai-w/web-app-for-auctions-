const express = require('express')
const session = require('express-session')
const router = express.Router()
const ItemCtrl = require('../controller/itemctrl')
const UserCtrl =require('../controller/userctrl')
const indexCtrl = require('../controller/indexctrl')


router.get('/',UserCtrl.loginUser)

router.post('/',UserCtrl.loginMethod)

router.get('/logout',indexCtrl.logoutMethod)


module.exports = router