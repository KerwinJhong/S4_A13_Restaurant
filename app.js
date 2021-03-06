const express = require('express')
const app = express()
if (process.env.NODE_ENV !== 'production') { // 如果不是 production 模式
    require('dotenv').config() // 使用 dotenv 讀取 .env 檔案
}
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useCreateIndex: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})
app.use(session({
    secret: 'your secret key',
    resave: false,
    saveUninitialized: true,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
require('./config/passport')(passport)
    // 登入後可以取得使用者的資訊方便我們在 view 裡面直接使用
app.use((req, res, next) => {
    res.locals.user = req.user
    res.locals.isAuthenticated = req.isAuthenticated()
    res.locals.success_msg = req.flash('success_msg')
    res.locals.warning_msg = req.flash('warning_msg')
    next()
})
app.use(express.static('public'))
app.use('/', require('./routes/homes'))
app.use('/restaurants', require('./routes/restaurants'))
app.use('/', require('./routes/search'))
app.use('/users', require('./routes/users'))
app.use('/auth', require('./routes/auths'))

app.listen(port, () => {
    console.log('app is running')
})