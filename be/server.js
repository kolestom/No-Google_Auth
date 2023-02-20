const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const port = 1122

app.use(cors())
app.use(express.json())

app.get('/api/public', (req, res) => {
    res.send('public')
})

app.get('/api/private', (req, res) => {
    res.send('private')
})

app.listen(port, () => {
    console.log(`Megy a szerver a ${port}-es porton a No-Google feladathoz` )
})