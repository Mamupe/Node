const CarRoutes = require('express').Router()

const { isAuth } = require('../../middlewares/auth.middlewares')

const { getCars, postCar } = require('./car.controller')


CarRoutes.get('/', [isAuth], getCars)
CarRoutes.post('/', [isAuth], postCar)

module.exports = CarRoutes