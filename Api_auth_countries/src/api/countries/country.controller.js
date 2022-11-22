const Country = require('./country.model')

const { setError } = require('../../helpers/error/handle.error')

const getCountries = async (req, res, next) => {
    try {
        const countries = await Country.find()
        return res.json({
            status: 200,
            message: 'Recovered all countries',
            data: { countries }
        })
    } catch (error) {
        return next(setError(500, 'Fail to recover countries'))
    }
}

const postCountry = async (req, res, next) => {
    try {
        const newCountry = new Country(req.body)
        const newCountryInDB = await newCountry.save()

        return res.json({
            status: 201,
            message: 'created Country',
            data: { newCountryInDB }
        })
    } catch (error) {

    }
}

module.exports = { getCountries, postCountry }