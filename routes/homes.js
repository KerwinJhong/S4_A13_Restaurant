const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

router.get('/', (req, res) => {
    Restaurant.find({}).sort({ name: 'desc' })
        .exec((err, restaurants) => {
            if (err) return console.log(err)
            return res.render('index', { restaurants: restaurants })
        })
})

module.exports = router