const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 1122
const Word = require('./models/WordSchema')
const userRoutes = require('./routes/users')

app.use(cors())
app.use(express.json())
app.use('/api/users', userRoutes)

mongoose.connect('mongodb+srv://hospitalsDB:hospitalsDB2023@hospital.shz8y3u.mongodb.net/NoGoogleAuth', ()=> console.log('MongoDB connected'))

app.get('/api/public', async (req, res) => {
    res.send(await Word.find({content: 'public'}))
    // res.send('public')
})

app.get('/api/private',async (req, res) => {
    res.send(await Word.find({content: 'private'}))
})

app.listen(port, () => {
    console.log(`Megy a szerver a ${port}-es porton a No-Google feladathoz` )
})