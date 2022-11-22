const MovieRoutes = require('express').Router();

const { getMovies, getMovie, postMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');

MovieRoutes.get('/', getMovies);
MovieRoutes.get('/:id', getMovie)
MovieRoutes.post('/', postMovie)
MovieRoutes.patch('/:id', updateMovie)
MovieRoutes.delete('/:id', deleteMovie)


module.exports = MovieRoutes;