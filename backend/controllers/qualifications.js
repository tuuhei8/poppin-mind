const qualificationsRouter = require('express').Router()

const Qualification = require('../models/qualification')

qualificationsRouter.get('/', async (request, response, next) => {
  try {
    const qualifications = await Qualification.find({})
    response.json(qualifications)
  } catch (exception) {
    next(exception)
  }
})

qualificationsRouter.get('/:id', async (request, response, next) => {
  try {
    const qualification = await Qualification.findById(request.params.id)
    response.json(qualification)
  } catch (exception) {
    next(exception)
  }
})

module.exports = qualificationsRouter