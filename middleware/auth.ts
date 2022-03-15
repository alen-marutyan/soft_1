const jwt = require('jsonwebtoken')
module.exports = function (req,res,next) {
    try {
        if(req.headers.authorization){
            let authToken = req.headers.authorization.split(' ')[1]
            jwt.verify(authToken,process.env.SECRET_KEY,(err,decoded)=>{
                if (err){
                    res.json({error: err.message});
                }
                req.user = decoded;
                next();
            });
        }else {
            res.json({error: 'no token'})
        }
    }catch (e) {
        res.json({error: e.message})
    }
}

