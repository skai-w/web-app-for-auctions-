const express = require('express')
const session = require('express-session')
const router = express.Router()
const ItemCtrl = require('../controller/itemctrl')

const indexCtrl = require('../controller/indexctrl')


router.get('/',ItemCtrl.SearchItem)

router.get('/logout',indexCtrl.logoutMethod)


module.exports = router