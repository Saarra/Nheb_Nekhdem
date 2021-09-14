const jwt = require('jsonwebtoken');

exports.isAuth=async(req,res,next)=>{
  const token=req.headers["authorization"]
    try {
        if(!token){
            return res.status(400).send({errors:[{msg:"you are not authorized"}]})
        }
       const decoded=jwt.verify(token,process.env.key)
       console.log(decoded)
        
    } catch (error) {
        res.status(500).send({errors:[{msg:"you are not authorized"}]})
    }
}