const express = require('express')
const cors = require('cors')

const { connect } = require('./database/connection')

const Album = require('./models/album.model.js')

connect()

const server = express()

server.use(cors())

const router = express.Router()

router.get('/albums/', async (req, res) => {
  try {
    const albums = await Album.find()
    return res.status(200).json(albums);
  } catch (error) {
    return res.status(500).json(error);
  }
})

router.get('/albums/year/:year', async (req, res) => {
	const {year} = req.params;

	try {
		const albumByYear = await Album.find({ year: { $gt:year } });
		return res.status(200).json(albumByYear);
	} catch (err) {
		return res.status(500).json(err);
	}
});





server.use('/apimybands/', router)

server.listen(process.env.PORT, () => {
  console.log('hola')
})

