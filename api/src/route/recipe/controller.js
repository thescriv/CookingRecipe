const db = require('../../utils/db')
const { validateCreateRecipe } = require('./schema')

async function listRecipe(_req, res) {
  const recipe = await db.recipes().find({}).sort({ _id: -1 })

  res.body = recipe
}

async function createRecipe(req, res) {
  const { body } = req

  validateCreateRecipe(body)

  const newRecipe = {
    _id: new ObjectId(),
    ...body,
  }

  //await db.recipes().insertOne(newRecipe)

  res.sendStatus(204)
}

async function updateRecipe(_req, res) {
  const { body } = req

  //validate(req)

  res.sendStatus(204)
}

module.exports = { listRecipe, createRecipe, updateRecipe }
