var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')

var server = express()

server.use(bodyParser.json())
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('api/v1/auth', authRoutes)

module.exports = server