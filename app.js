const morgan = require('morgan')
const express = require('express')
const app = express()

const euroGroups = require('./euroData.json')

app.use(morgan('dev'))

app.get('/', (req, res, next) => {
    res.send({msg: "For EURO 2024 groups, navigate to /groups"})
})

app.get('/groups', (req, res, next) => {
    res.send(euroGroups)
})

module.exports = app;