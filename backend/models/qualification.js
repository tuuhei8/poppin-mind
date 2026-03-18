const mongoose = require('mongoose')

const qualificationSchema = mongoose.Schema({
  icon: String,
  title: String,
  desc: String
})

qualificationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Qualification', qualificationSchema)