const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
    content: String
})

module.exports = mongoose.model('Word', wordSchema)