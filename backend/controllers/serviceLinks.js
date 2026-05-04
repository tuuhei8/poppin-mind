const servicelinksRouter = require('express').Router()

const Service = require('../models/service')

servicelinksRouter.get('/', async (request, response, next) => {
  try {
    const services = await Service.find({})
    const links = services.map(({ path, link }) => ({
      path,
      ...link
    }))
    response.json(links)
  } catch (exception) {
    next(exception)
  }
})

module.exports = servicelinksRouter