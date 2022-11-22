const mongoose = require('mongoose')

const citySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: [{ type: mongoose.Schema.Types.ObjectId, ref: 'country', required: true  }],
    population: { type: Number }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('city', citySchema)