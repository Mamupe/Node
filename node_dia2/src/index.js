const express = require('express')
const cors = require('cors')

const { connect } = require('./database/connect')


const Movie = require('./movie/movie')

connect();

const server = express()

server.use(cors())

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// })

const router = express.Router()

router.get('/movies', async (req, res) => {
  const movies = await Movie.find()
  res.send(movies);
})

server.use('/', router)

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} 🚀`)
})