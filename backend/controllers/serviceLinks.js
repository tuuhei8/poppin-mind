const servicelinksRouter = require('express').Router()

const ServiceLink = require('../models/serviceLink')

servicelinksRouter.get('/', async (request, response, next) => {
  try {
    const services = await ServiceLink.find({})
    response.json(services)
  } catch (exception) {
    next(exception)
  }
})

module.exports = servicelinksRouter