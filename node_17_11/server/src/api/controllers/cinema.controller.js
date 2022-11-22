const Cinema = require('../models/cinema.model')

const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await Cinema.find().populate('movies')
    res.status(200).json(cinemas)
  } catch (error) {
    return next(error)
  }
}

const getCinema = async (req, res, next) => {
    try {
      const { id } = req.params 
      const cinema = await Cinema.findbyId(id).populate('movies')
      res.status(200).json(cinema)
    } catch (error) {
      return next(error)
    }
  }

  const postCinema = async (req, res, next) => {
    try {
      
      const cinema = new Cinema(req.body)
      const cinemaInDB = await cinema.save()
      return res.status(201).json(cinemaInDB)
    } catch (error) {
      return next(error)
    }
  }

  const updateCinema = async (req, res, next) => {
    try {
      const { id } = req.params
      const cinema = new Cinema(req.body)
      cinema._id = id
      const updateCinemaDB = await Cinema.findByIdAndUpdate(id, cinema)
      return res.status(200).json(updateCinemaDB)
    } catch (error) {
      return next(error)
    }
  }

  const deleteCinema = async (req, res, next) => {
    try {
      const { id } = req.params
      const cinema = await Cinema.findByIdAndDelete(id)
      return res.status(200).json(cinema)
    } catch (error) {
      return next(error)
    }
  }



module.exports = { getCinemas, getCinema, postCinema, updateCinema, deleteCinema }