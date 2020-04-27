const path = require('path')
const express = require('express')

const server = express()

server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/data', require('./route/data'))

module.exports = server
