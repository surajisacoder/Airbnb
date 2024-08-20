const User=require('../../model/authschema');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();

const SignUp=async (req,res)=>{
 try{
   const {username,email,password,cpassword,mobileno}=req.body;
    if(password!==cpassword){
        return res.status(404).json({
            success:false,
            message:"Password Doesn't Match"
        })
    }
    let hashpassword;
    try{
     hashpassword= await bcrypt.hash(password,10);

    }catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            message:"Account Not Created"
        })
    }
    const token=jwt.sign({id:email},process.env.SECRET_KEY);
    try{
    const newuser= new User({username,mobileno,email,password:hashpassword});
    const response=await newuser.save();
    const {password,...rest}=response._doc;
    res.json({
    
        sucsess:true,
        message:"Account Created Successfully",
        data:{...rest,token}

    })
   }
   catch(err){
    console.log(err);
    res.status(404).json({
        sucsess:false,
        message:"Account Already Exist"
    })
   }

 }catch(err){
    console.log(err);
    res.status(404).json({
        sucsess:false,
        message:"Account Not Created"
    })
 }
}

module.exports=SignUp;