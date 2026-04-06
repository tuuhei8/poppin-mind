const mongoose = require('mongoose')


const priceSchema = mongoose.Schema({
  price: String,
  en: Object,
  fi: Object
})

priceSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Price', priceSchema)