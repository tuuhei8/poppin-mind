const express = require('express')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const morgan = require('morgan')
const middleware = require('./utils/middleware')
const servicesRouter = require('./controllers/services')
const coachesRouter = require('./controllers/coaches')

const app = express()

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

//app.use(express.static('dist'))
app.use(morgan('tiny'))

app.use('/api/services', servicesRouter)
app.use('/api/coaches', coachesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app