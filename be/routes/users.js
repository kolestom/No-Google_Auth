const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const confirmEmail = require('../util/confirmEmail')
const resetPassword = require('../util/resetPassword')
const {randomBytes} = require('node:crypto');





const saltRounds = 10
const secretKey = "secret"

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
    confirmCode = randomBytes(8).toString('hex');
    
    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
      if (err) return res.sendStatus(500);

      try {
        await User.create({
          username: req.body.username,
          email: req.body.email,
          password: hash,
          confirmation: {
            date: new Date().getTime(),
            code: confirmCode,
            confirmed: false,
          },
        });
        const [user] = await User.find({ username: req.body.username });

        confirmEmail(user.email, user.username, user.confirmation.code);
        res.sendStatus(200);
      } catch (error) {
        res.sendStatus(400);
      }
    });

})

router.post('/login', async(req, res) => {
    try {
        const [user] = await User.find({username: req.body.username})
        if(!user) return res.sendStatus(401)
        bcrypt.compare(req.body.password, user.password, (err, result) =>{
            const token = jwt.sign({ id: user._id, username: user.username }, secretKey, {expiresIn: '10s'});
            result ? res.send(token) : res.sendStatus(404)
        })
        
    } catch (err) {
        res.send(err.message)
    }
})

router.post('/confirm', async (req, res) => {
    const [user] = await User.find({username: req.body.username})
    if (!user || !(req.body.date < user.confirmation.date + 300000) || req.body.code !== user.confirmation.code) return res.sendStatus(403)
    await User.updateOne({username: req.body.username}, { $set: { 'confirmation.confirmed': true }})
    res.sendStatus(200)
    
  })
  
router.post('/reset',async (req,res)=>{
  const confirmResetCode = randomBytes(8).toString('hex');
  const [user] = await User.find({username:req.body.username})
  console.log(user)
  if(!user) res.sendStatus(403)
  try{
    await User.updateOne({username: req.body.username}, { $set: {'reset':{'date':new Date().getTime(),'code':confirmResetCode}} })
    resetPassword(user.email,user.username,confirmResetCode)
    res.send(201)
  }catch(err){
    res.sendStatus(400)
  }
})

router.post('/password',async (req,res)=>{
  const [user]= await User.find({username:req.body.username})
  console.log(user)
  console.log(req.body)
  if (!user || !(req.body.date < user.reset.date + 300000 || req.body.code !== user.reset.code)) return res.sendStatus(403)
  const hashedPassword = await bcrypt.hash(req.body.newPassword, saltRounds)
  console.log(hashedPassword)
  await User.updateOne({username: req.body.username}, { $set:{"password":hashedPassword} })
  res.send(200)
})

module.exports = router