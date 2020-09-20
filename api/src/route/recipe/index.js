const express = require('express')

const { listRecipe, createRecipe, updateRecipe } = require('./controller')

const routerRecipe = express.Router()

routerRecipe.use('/', (_req, _res, next) => {
  next()
})

routerRecipe.get('/', listRecipe)

routerRecipe.post('/', createRecipe)

routerRecipe.put('/', updateRecipe)


module.exports = { routerRecipe }
