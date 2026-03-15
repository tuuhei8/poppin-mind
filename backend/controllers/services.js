const servicesRouter = require('express').Router()

const Service = require('../models/service')

servicesRouter.get('/', async (request, response, next) => {
  try {
    const services = await Service.find({})
    response.json(services)
  } catch (exception) {
    next(exception)
  }
})

servicesRouter.get('/:id', async (request, response, next) => {
  try {
    const service = await Service.findById(request.params.id)
    response.json(service)
  } catch (exception) {
    next(exception)
  }
})

module.exports = servicesRouter