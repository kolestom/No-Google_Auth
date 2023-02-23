const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    confirmation: {
        date: Number,
        code: String,
        confirmed: Boolean
    },
    reset:{
        date:Number,
        code:String
    }
})
module.exports = mongoose.model('User', userSchema)