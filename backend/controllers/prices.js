const pricesRouter = require('express').Router()

const Price = require('../models/price')

pricesRouter.get('/', async (request, response, next) => {
  try {
    const prices = await Price.find({})
    response.json(prices)
  } catch (exception) {
    next(exception)
  }
})

pricesRouter.get('/:id', async (request, response, next) => {
  try {
    const price = await Price.findById(request.params.id)
    response.json(price)
  } catch (exception) {
    next(exception)
  }
})

module.exports = pricesRouter