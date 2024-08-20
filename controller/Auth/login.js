const jwt=require('jsonwebtoken');
const User=require('../../model/authschema');
const bcrypt=require('bcrypt');
const dotenv=require('dotenv');
dotenv.config();

const Login=async (req,res)=>{
  try{
   const {number,password}=req.body;
 
   if(!number){
    return res.status(404).json({
        success:false,
        message:"Mobile Number Can't be Empty"
    })
   }
   if(!password){
    return res.status(404).json({
        success:false,
        message:"Password Can't be Empty"
    })
   }
   
   const user= await User.findOne({mobileno:number});
   
   if(!user){
    return res.status(404).json({
        success:false,
        message:"Invalid user"

    })
   }
   let hashpassword= await bcrypt.compare(password,user.password);
   if(!hashpassword){
    return res.status(404).json({
        success:false,
        message:"Incorrect Password"

    })
   }
   else{
    const {password,...rest}=user._doc;
    const token=jwt.sign({id:user.email},process.env.SECRET_KEY);
     return res.json({
        success:true,
        message:"Login Successfully",
        data:{...rest,token}
         
     })
   }

  }
  catch(err){
    console.log(err);
    res.status(404).json({
        sucsess:false,
        message:"Login Failed"
    })
  }
}

module.exports=Login;