const express=require('express');
const router=express.Router();


const hotel=require('../controller/Hotel/hotel');
const addHotelDataToDb=require('../controller/Hotel/addHotelDataToDB');
const addCategoryToDb=require('../controller/Hotel/addCategoryToDb');
const hotelcategory=require('../controller/Hotel/category');
const hotelById=require('../controller/Hotel/searchHotelById');

router.post('/categorydata',addCategoryToDb);
router.post('/hoteldata',addHotelDataToDb);
router.get('/hotel',hotel);
router.get('/hotelcategory',hotelcategory);
router.get('/hotel/:id',hotelById);


module.exports=router;