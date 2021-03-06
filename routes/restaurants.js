const express = require('express')
const router = express.Router()
const Restaurant = require('../models/restaurant')
const { authenticated } = require('../config/auth')

router.get('/', authenticated, (req, res) => {
    return res.redirect('/')
})

router.get('/new', authenticated, (req, res) => {
    res.render('new')
})

router.post('/', authenticated, (req, res) => {
    const restaurant = Restaurant({
        userId: req.user._id,
        name: req.body.name,
        name_en: req.body.name_en,
        category: req.body.category,
        image: req.body.image,
        location: req.body.location,
        phone: req.body.phone,
        google_map: req.body.google_map,
        rating: req.body.rating,
        description: req.body.description
    })
    restaurant.save(err => {
        if (err) return console.log(err)
        return res.redirect('/')
    })
})

router.get('/:id', authenticated, (req, res) => {
    Restaurant.findOne({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
        if (err) return console.error(err)
        return res.render('detail', { restaurant: restaurant })
    })
})

router.get('/:id/edit', authenticated, (req, res) => {
    Restaurant.findOne({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
        if (err) return console.error(err)
        return res.render('edit', { restaurant: restaurant })
    })
})

router.put('/:id/edit', authenticated, (req, res) => {
    Restaurant.findOne({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
        if (err) return console.error(err)
        restaurant.name = req.body.name
        restaurant.name_en = req.body.name_en
        restaurant.category = req.body.category
        restaurant.image = req.body.image
        restaurant.location = req.body.location
        restaurant.phone = req.body.phone
        restaurant.google_map = req.body.google_map
        restaurant.rating = req.body.rating
        restaurant.description = req.body.description
        restaurant.save(err => {
            if (err) return console.error(err)
            return res.redirect(`/restaurants/${req.params.id}`)
        })
    })
})

router.delete('/:id/delete', authenticated, (req, res) => {
    Restaurant.findOne({ _id: req.params.id, userId: req.user._id }, (err, restaurant) => {
        if (err) return console.error(err)
        restaurant.remove(err => {
            if (err) return console.error(err)
            return res.redirect('/')
        })
    })
})

module.exports = router