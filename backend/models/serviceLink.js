const mongoose = require('mongoose')

const serviceLinkSchema = mongoose.Schema({
  path: String,
  icon: String,
  en: Object,
  fi: Object
})

serviceLinkSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('ServiceLink', serviceLinkSchema)