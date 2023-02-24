const express = require('express')
const router = express.Router()
const Word = require('../models/WordSchema')

const authMiddleWare = require('../middlewares/auth')

router.get('/public', async (req, res) => {
    res.send(await Word.find({content: 'public'}))
})

router.get('/private', [authMiddleWare, async (req, res) => {
    if (!res.locals.username) return res.sendStatus(401)
    res.send(await Word.find({content: 'private'}))
}])

module.exports = router