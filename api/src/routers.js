const { routerRecipe } = require('./route/recipe')

module.exports = [
  {
    path: 'recipe',
    router: routerRecipe,
  },
]
