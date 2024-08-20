const Wishlist=require('../../model/wishlistSchema');
const User=require('../../model/authschema');
const deleteWishlist=async (req,res)=>{
    try{
      const {id}=req.params;
      const {email}=req.body;
      const user=await User.findOneAndUpdate({email},{$pull:{wishlist:{hotelId:id}}});
      const deletedWishlist=await Wishlist.deleteOne({hotelId:id},{new:true});
      res.json({
        success:true,
        message:"Items deleted",
      })
    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false,
            message:err,
        })
    }
};

module.exports=deleteWishlist;