const { startApi, stopApi } = require('./api')

const config = require('./config')

async function start() {
  console.log('starting api')

  await startApi(config.API_PORT)
}

async function stop() {
  console.log('stopping api')

  await stopApi()
}

async function main() {
  try {
    await start()
  } catch (err) {
    throw new Error(err)
  }
}

main()

process.on('SIGTERM', stop)
process.on('SIGINT', stop)

module.exports = { start, stop }
