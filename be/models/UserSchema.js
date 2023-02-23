const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    confirmation: {
        date: Number,
        code: String,
        confirmed: Boolean
    }
})
module.exports = mongoose.model('User', userSchema)