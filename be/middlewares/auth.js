const jwt = require('jsonwebtoken')

const authMiddleWare = (req, res, next) =>{
    const token = req.headers.authorization.replace('Bearer: ', '');
    if (!token) return res.sendStatus(401)
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        res.locals.username = decoded.username
        next()
    } catch(err) {
        console.log(err);
        return res.sendStatus(403)
    }
}

module.exports = authMiddleWare
