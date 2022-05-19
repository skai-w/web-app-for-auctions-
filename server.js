if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app =express()
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')
const path = require('path')

const session = require('express-session')

const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const itemRouter = require('./routes/items')



app.use('/static',express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit :'10mb' ,extended : false}))

app.use(session({
    secret : 'hngkrgfejfnelkrfelmrf',
    resave : false,
    saveUninitialized : true
}))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true ,useUnifiedTopology: true })

const db = mongoose.connection
db.on('error',error => console.error(error))
db.once('open',() => console.log('connected to mongoose'))

app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/items',itemRouter)




app.listen(process.env.PORT || 3000)
