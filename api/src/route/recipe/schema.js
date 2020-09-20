const { createValidator } = require('../../utils/validator')

const validateCreateRecipe = createValidator({ name: { type: 'string', min: 1 } })

module.exports = { validateCreateRecipe }
