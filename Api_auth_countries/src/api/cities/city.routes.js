const CityRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middlewares')

const { getCities, postCity } = require('./city.controller')

CityRoutes.get('/', [isAuth], getCities)
CityRoutes.post('/', [isAuth], postCity)

module.exports = CityRoutes;