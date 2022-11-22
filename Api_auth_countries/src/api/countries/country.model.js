const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    continent: { type: String, required: true},
    population: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('country', countrySchema)