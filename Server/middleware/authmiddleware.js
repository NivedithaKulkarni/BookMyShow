const jwt = require('jsonwebtoken')

module.exports = function(req,res,next){
    try {
        const token = req.headers.authorization.split(' ')[1]
        const verfiedToken = jwt.verify(token, process.env.JWT_SECRET)
       // console.log(verfiedToken)// gives you userid
        req.body.userId = verfiedToken.userId
        next()//move to the next part

    } catch (error) {
        res.status(401).send({ success: false, message: "Token Invalid" });
    }
}