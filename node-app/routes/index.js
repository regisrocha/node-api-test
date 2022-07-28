const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello')
})

router.get('/path/:name', (req, res, next) => {
    res.send('path: ' + req.params.name)
})

router.get('/query', (req, res, next) => {
    res.send('query: ' + req.query.name)
})


router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.post('/post', (req, res) => {
    const body = req.body

    console.log("BODY >>> " + req.body)

    res.json({
        confirmation: 'success',
        data: req.body
    })  
})


router.get('/json', (req, res, next) => {
    res.contentType('application/json')

    const data = {
        greeting: 'Hello'
    }

    res.json(data)
})

module.exports = router