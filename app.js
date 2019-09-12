const express = require('express')
const app = express()
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', () => {
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})

app.use(express.static('public'))
app.use('/', require('./routes/homes'))
app.use('/restaurants', require('./routes/restaurants'))
app.use('/', require('./routes/search'))

app.listen(port, () => {
    console.log('app is running')
})