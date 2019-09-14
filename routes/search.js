const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')

router.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const sortKey = req.query.sortKey
    const sortValue = req.query.sortValue || 'desc'
    const sortObj = {}
    sortObj[sortKey] = sortValue
    Restaurant.find({ userId: req.user._id })
        .sort(sortObj)
        .exec((err, restaurants) => {

            if (err) return console.error(err)
            const restaurant = restaurants.filter(restaurant => {
                const regex = new RegExp(keyword, 'gi')
                return restaurant.name.match(regex) || restaurant.category.match(regex)
            })
            res.render('index', { restaurants: restaurant, keyword: keyword, sortKey: sortKey })
        })
})

module.exports = router