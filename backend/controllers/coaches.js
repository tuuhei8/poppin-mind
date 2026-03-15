const coachesRouter = require('express').Router()

const Coach = require('../models/coach')

coachesRouter.get('/', async (request, response, next) => {
  try {
    const coaches = await Coach.find({})
    response.json(coaches)
  } catch (exception) {
    next(exception)
  }
})

coachesRouter.get('/:id', async (request, response, next) => {
  try {
    const coach = await Coach.findById(request.params.id)
    response.json(coach)
  } catch (exception) {
    next(exception)
  }
})

module.exports = coachesRouter