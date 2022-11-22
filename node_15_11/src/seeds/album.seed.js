const mongoose = require('mongoose')

const Album = require('../models/album.model');

const albumList = [
    {
        name: "Carne pa la picadora",
        band: "La Polla Records",
        year: "1996"
    },
    {
        name: "Agila",
        band: "Extremoduro",
        year: "1996"
    },
    {
        name: "Se habla español",
        band: "Lendakaris Muertos",
        year: "2006"
    },
    {
        name: "Tempestes venen del sud",
        band: "Zoo",
        year: "2014"
    }
];

const albumsToDataBase = albumList.map(albumElement => new Album(albumElement));

mongoose.connect('mongodb+srv://admin:admin@albums.xa54fo5.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, })
  .then(async () => {
    const albumsRecovered = await Album.find();
    if (albumsRecovered.length) {
      await Album.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Album.insertMany(albumsToDataBase);
    console.log('DatabaseCreated')
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());