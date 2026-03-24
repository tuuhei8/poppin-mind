const mongoose = require('mongoose')

const priceDetails = mongoose.Schema({
  price: String,
  duration: String
})

const pricesSchema = mongoose.Schema({
  onlineSession: priceDetails,
  inPersonSession: priceDetails,
  introductoryCall: priceDetails
})

pricesSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Price', pricesSchema)