const mongoose = require('mongoose')

const carSchema = new mongoose.Schema(
  {
    made: { type: String, required: true },
    model: { type: String, required: true},
    img: { type: String },
    year: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('cars', carSchema)