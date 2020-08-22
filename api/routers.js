const { routerHelloWorld } = require('./src/HelloWorld')

module.exports = [
  {
    path: 'helloWorld',
    router: routerHelloWorld,
  },
]
