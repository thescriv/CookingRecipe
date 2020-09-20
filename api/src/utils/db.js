const monk = require('monk')

const config = require('../../config')

const db_url = `${config.DB_USERNAME}:${config.DB_PASSWORD}@${config.DB_URL}:${config.DB_URL}`

const db = monk(db_url)

db.recipes = db.get('recipe')

module.exports = { db }
