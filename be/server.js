require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 1122
const userRoutes = require('./routes/users')
const wordRoutes = require('./routes/words')


app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/words', wordRoutes)

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(port,()=>{
        console.log(`Megy a szerver a ${port}-es porton a No-Google feladathoz`)
    })   
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });