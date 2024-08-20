const mongoose=require('mongoose');

const wishlistSchema=new mongoose.Schema({
    hotelId:{
        type:String,
    }
})


const authSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    mobileno:{
      type:Number,
      required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
       type:String,
       required:true,
    },
    wishlist:[wishlistSchema]
})

const User=mongoose.model("User",authSchema);
module.exports=User;