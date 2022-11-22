
const dotenv = require('dotenv');

dotenv.config();

const mongoose = require('mongoose');

const Movie = require('../movie/movie');
const movies = require('../movie/movie.seed');

const mongoURI = process.env.MONGO_URI;


const connect = async () => {

    try {
        const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        
        const allMovies = await Movie.find();
        console.log(allMovies);
        if (allMovies.length) await Movie.collection.drop();
        console.log(allMovies);
        const moviesSeed = await movies.map(movie => new Movie(movie));
        await Movie.insertMany(moviesSeed);
        
        const { name, host } = dbConnect.connection;
        console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
    } catch (error) {
        console.error(`No se ha podido conectar a la DB 💔`, error)
    }
}


module.exports = { connect };