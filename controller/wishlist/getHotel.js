const Wishlist=require('../../model/wishlistSchema');
const User=require('../../model/authschema');
const getHotel=async (req,res)=>{
  
   try{
   const {email}=req.body;
   const user=await User.findOne({email});
   const {wishlist}=user;
   wishlist.length>0?res.json({
    success:true,
    data:wishlist,
   })
   :
   res.json({
    success:true,
    message:"Wishlist is Empty"
   })
   }
   catch(err){
    console.log(err);
    res.status(500).json({
        success:false,
        message:err,
    })
   }
};

module.exports=getHotel;