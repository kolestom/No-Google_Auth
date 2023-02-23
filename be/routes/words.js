const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const Word = require('../models/WordSchema')
const jwt = require('jsonwebtoken')

const secretKey= "secret"


router.get('/public', async (req, res) => {
    res.send(await Word.find({content: 'public'}))
})

router.get('/private', async (req, res) => {
    const token = req.headers.authorization.replace('Bearer: ', '');
    if (!token) return res.sendStatus(403)
    try {
        const decoded = jwt.verify(token, secretKey);
        if (await User.find({username: decoded.username})) {
            res.send(await Word.find({content: 'private'}))
        } else res.sendStatus(401)

    } catch(error){
        console.log(error.message);
        res.sendStatus(401)
    }
    
    
})

module.exports = router