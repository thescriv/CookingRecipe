const Validator = require('fastest-validator')
const createError = require('http-errors')

const v = new Validator()

function createValidator(schema) {
  const check = v.compile(schema)

  return (obj) => {
    const res = check(obj)

    if (res.length) {
      createError(400, res[0].message)
    }
  }
}

module.exports = { createValidator }
