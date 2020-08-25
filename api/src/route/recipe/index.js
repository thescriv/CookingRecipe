const express = require('express')

const { listRecipe } = require('./controller')

const routerRecipe = express.Router()

routerRecipe.use('/', (_req, _res, next) => {
  next()
})

routerRecipe.get('/', listRecipe)

module.exports = { routerRecipe }
