const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema(
    {
        name: { type: String, required: true },
        band: { type: String, requiered: true},
        year: { type: Number}
    },
    {
        timestamps: true
    }
)

const Album = mongoose.model('album', AlbumSchema);

module.exports = Album;