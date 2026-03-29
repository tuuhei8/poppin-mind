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

module.exports = qualificationsRouter