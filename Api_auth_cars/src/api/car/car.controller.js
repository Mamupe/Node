const Car = require('./car.model')

const { setError } = require('../../helpers/error/handle.error')

const getCars = async (req, res, next) => {
  try {
    const cars = await Car.find()
    return res.json({
      status: 200,
      message: 'Recovered all Cars',
      data: { cars }
    })

  } catch (error) {
    return next(setError(500, 'Fail to recover cars'))
  }
}

const postCar = async (req, res, next) => {
  try {
    const newCar = new Car(req.body)
    console.log(newCar)
    const newCarInDB = await newCar.save()

    return res.json({
      status: 201,
      message: 'Created Car',
      data: { newCarInDB }
    })

  } catch (error) {

  }
}

module.exports = { getCars, postCar }