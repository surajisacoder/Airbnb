const Wishlist=require('../../model/wishlistSchema');
const User=require('../../model/authschema');
const wishlist=async (req,res)=>{
    try{
      const {hotelId,email}=req.body;
      const newwishlist=new Wishlist({hotelId});
      const user= await User.findOneAndUpdate({email},{$push:{wishlist:{hotelId}}});
   
      const response=await newwishlist.save();

      res.status(201).json({
        success:true,
        data:hotelId,
        message:"Sucessfully Added"
      })

    }
    catch(err){
     console.log(err);
     res.status(500).json({
        success:false,
        message:"Failed to create wishlist"
     })
    }
};

module.exports=wishlist;