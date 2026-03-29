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

module.exports = pricesRouter