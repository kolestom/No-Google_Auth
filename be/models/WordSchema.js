const mongoose = require('mongoose')

const Schema = mongoose.Schema

const wordSchema = new Schema({
    content: String
})

module.exports = mongoose.model('Word', wordSchema)