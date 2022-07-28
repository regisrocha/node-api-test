const express = require('express')
const path = require('path')
const hoganMiddleware = require('hogan-middleware')
const indexRouter = require('./routes/index')
const bodyParser = require('body-parser')

const app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', hoganMiddleware.__express)
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())

app.use('/', indexRouter)

const midTest = (req, res, next) => {
    console.log('MIDDLEWARE')
    req.timestamp = 'TIMESTAMP'
    next()
}

app.use(midTest)

app.listen('3000')
console.log('Server is running on http://localhost:3000')