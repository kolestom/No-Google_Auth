const authMiddleWare = (req, res, next) =>{
    const token = req.headers.authorization.replace('Bearer: ', '');
}

module.exports = authMiddleWare