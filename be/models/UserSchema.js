const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        unique: true,
        type: String
    },
    password: String,
    email: {
        unique: true,
        type: String
    },
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