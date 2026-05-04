const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
  path: String,
  link: Object,
  content: Object,
})

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Service', serviceSchema)