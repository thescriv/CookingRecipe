const express = require('express')

const routerHelloWorld = express.Router()

routerHelloWorld.use('/', (_req, _res, next) => {
  next()
})

routerHelloWorld.get('/', async (_req, res) => {
  console.log('Hello World')

  res.sendStatus(204)
})

module.exports = { routerHelloWorld }
