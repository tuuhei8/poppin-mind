const servicesRouter = require('express').Router()

const Service = require('../models/service')

servicesRouter.get('/links', async (request, response, next) => {
  try {
    const services = await Service.find({})
    const links = services.map(({ id, path, link }) => ({
      id,
      path,
      ...link
    }))
    response.json(links)
  } catch (exception) {
    next(exception)
  }
})

servicesRouter.get('/:path', async (request, response, next) => {
  try {
    const service = await Service.findOne({path: request.params.path})  
    const content = service.content
    response.json(content)
  } catch (exception) {
    next(exception)
  }
})

module.exports = servicesRouter