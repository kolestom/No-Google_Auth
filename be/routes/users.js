const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')

const saltRounds = 10

router.post('/check_username', async (req, res) =>{
    
    const user = await User.find({username: req.body.username})
    if(user.length > 0) {
        res.send(true)
    } else res.send(false)
    
})
router.post('/check_email', async (req, res) =>{
    
    const user = await User.find({email: req.body.email})
    if(user.length > 0) {
        res.send(true)
    } else res.send(false)
    
})

router.post('/signup',  async(req, res) => {
    try {

        bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
            await User.create({
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            
        })
        const user = await User.find({username: req.body.username})

        res.sendStatus(200)
    } catch (error) {
        res.sendStatus(400)
    }
})

router.post('/login', async(req, res) => {
    try {
        const user = await User.find({username: req.body.username})
        if(user.length > 0) {
            bcrypt.compare(req.body.password, user[0].password, (err, result) =>{
                
                console.log(result);
                result ? res.send(user[0]) : res.sendStatus(404)
            })
        } else res.sendStatus(401)
    } catch (err) {
        res.send(err.message)
    }
})

module.exports = router