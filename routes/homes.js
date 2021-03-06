const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
    Restaurant.find({ userId: req.user._id }).sort({ name: 'asc' })
        .exec((err, restaurants) => {
            if (err) return console.log(err)
            return res.render('index', { restaurants: restaurants })
        })
})

module.exports = router