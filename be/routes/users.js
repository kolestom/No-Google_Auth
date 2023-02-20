const express = require('express')
const app = express()
const router = express.Router()
const User = require('../models/UserSchema')

router.post('/signup', async (req, res) => {
    // console.log(req.body);
    const thing = await User.create(req.body)
    res.send(thing)
})

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

module.exports = router