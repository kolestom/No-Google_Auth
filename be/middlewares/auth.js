const jwt = require('jsonwebtoken')
const secretKey= "secret"

const authMiddleWare = (req, res, next) =>{
    const token = req.headers.authorization.replace('Bearer: ', '');
    if (!token) return next()
    try {
        const decoded = jwt.verify(token, secretKey);
        res.locals.username = decoded.username
        next()
    } catch {
        next()
    }
}

module.exports = authMiddleWare
