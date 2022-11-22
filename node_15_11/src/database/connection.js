const dotenv = require('dotenv')

dotenv.config();

const mongoose = require('mongoose')

const mongoURI = process.env.MONGO_URI

const connect = async () => {
    try {
       
        const dbConnect = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
       
        const { name, host } = dbConnect.connection
        console.log(`Conectado a la DB 👀: ${name} en el host❤️: ${host}`);
      } catch (error) {
       
        console.error(`No se ha podido conectar a la DB 💔`, error)
      }
    };

module.exports = { connect }
