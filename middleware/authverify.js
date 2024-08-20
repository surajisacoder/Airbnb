const jwt=require('jsonwebtoken');
const dotenv=require('dotenv')
dotenv.config();
const authVerify=(req,res,next)=>{

   const token=req.headers.authorization;
   if(token){
     jwt.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err) res.status(403).json({
            success:false,
            message:"Invalid  Token"
        })
        req.user=user;
        next();
     })
   }
}

module.exports=authVerify;