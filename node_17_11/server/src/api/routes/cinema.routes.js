const CinemaRoutes = require('express').Router()

const {
    getCinemas, getCinema, postCinema, updateCinema, deleteCinema } = require('../controllers/cinema.controller');


    CinemaRoutes.get('/', getCinemas)
    CinemaRoutes.get('/:id', getCinema)
    CinemaRoutes.post('/', postCinema)
    CinemaRoutes.patch('/:id', updateCinema)
    CinemaRoutes.delete('/:id', deleteCinema)

module.exports = CinemaRoutes;