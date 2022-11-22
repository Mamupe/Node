const Movie = require('../models/movie.model');

const getMovies = async (req, res, next) => {
    try {
        const movies = await Movie.find()
        res.status(200).json(movies)
    } catch (error) {
        return next(error)
    }
};

const getMovie = async (req, res, next) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        res.status(200).json(movie)
    } catch (error) {
        return next(error)
    }
};

const postMovie = async (req, res, next) => {
    try {
      
      const movie = new Movie(req.body)
      const movieInDB = await movie.save()
      return res.status(201).json(movieInDB)
    } catch (error) {
      return next(error)
    }
  }

  const updateMovie = async (req, res, next) => {
    try {
      const { id } = req.params
      const movie = new Movie(req.body)
      movie._id = id
      const updateMovieDB = await Movie.findByIdAndUpdate(id, movie)
      return res.status(200).json(updateMovieDB)
    } catch (error) {
      return next(error)
    }
  }

  const deleteMovie = async (req, res, next) => {
    try {
      const { id } = req.params
      const movie = await Movie.findByIdAndDelete(id)
      return res.status(200).json(movie)
    } catch (error) {
      return next(error)
    }
  }



module.exports = { getMovies, getMovie, postMovie, updateMovie, deleteMovie };
