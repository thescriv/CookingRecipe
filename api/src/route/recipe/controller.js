//const createError = require('http-errors')

async function helloWorld(_req, res) {
  console.log('Hello World')

    /* if () {
        throw createError(400, 'An error occured')
    } */

  res.sendStatus(204)
}

module.exports = { helloWorld }
