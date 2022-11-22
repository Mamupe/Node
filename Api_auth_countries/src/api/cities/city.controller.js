const City = require('./city.model')

const { setError } = require('../../helpers/error/handle.error')

const getCities = async (req, res, next) => {
    try {
        const cities = await City.find()
        return res.json({
            status: 200,
            message: 'Recovered all cities',
            data: { cities }
        })
    } catch (error) {
        return next(setError(500, 'Fail to recover cities'))
    }
}

const postCity = async (req, res, next) => {
    try {
        const newCity = new City(req.body)
        const newCityInDB = await newCity.save()

        return res.json({
            status: 201,
            message: 'created City',
            data: { newCityInDB }
        })
    } catch (error) {

    }
}

module.exports = { getCities, postCity }