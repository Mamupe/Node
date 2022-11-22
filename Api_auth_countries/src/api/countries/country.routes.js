const CountryRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middlewares')

const { getCountries, postCountry } = require('./country.controller')

CountryRoutes.get('/', [isAuth], getCountries)
CountryRoutes.post('/', [isAuth], postCountry)

module.exports = CountryRoutes;