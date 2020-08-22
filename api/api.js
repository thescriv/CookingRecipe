const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const routers = require('./routers')

let server

async function startApi(port) {

  const app = express()

  app.use(bodyParser.json())
  app.use(cors())

  server = app.listen(port, () => {
    console.log(`Listening on port: "${port}"`)
  })

  app.use('/api', (_req, _res, next) => {
    console.log('got a request !')

    next()
  })

  routers.forEach(({ path, router }) => {
    app.use(`/api/${path}`, router)
  })
}

async function stopApi() {
  await server.close()
}

module.exports = { startApi, stopApi }
