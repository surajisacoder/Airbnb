const express=require('express');
const wishlistRouter=express.Router();
const addHotel=require('../controller/wishlist/addHotel');
const getHotel=require('../controller/wishlist/getHotel');
const deleteHotel=require('../controller/wishlist/deleteHotel');
const authVerify=require('../middleware/authverify');


wishlistRouter.post('/wishlist',authVerify,addHotel);
wishlistRouter.get('/wishlist',authVerify,getHotel);
wishlistRouter.delete('/wishlist/:id',authVerify,deleteHotel);


module.exports=wishlistRouter;