const servicesRouter = require('express').Router()

const Service = require('../models/service')

servicesRouter.get('/', async (request, response, next) => {
  try {
    const services = await Service.find({})
    if (services) {
      response.json(services)
    }
  } catch (exception) {
    next(exception)
  }
})

servicesRouter.get('/:path', async (request, response, next) => {
  try {
    const service = await Service.findOne({path: request.params.path})
    if (service) {
      response.json(service)
    } else {
      response.status(400).send({ error: 'malformatted path' })
    }
  } catch (exception) {
    next(exception)
  }
})

module.exports = servicesRouter