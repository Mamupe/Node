const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true  }],
  
  },
  {
    timestamps: true,
  }
);

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;