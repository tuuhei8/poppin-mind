const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({
  title: String,
  description: String,
  price: String
})

serviceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Service', serviceSchema)