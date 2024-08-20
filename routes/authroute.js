const express=require('express');
const AuthRouter=express.Router();


const signup=require('../controller/Auth/signup');
const login=require('../controller/Auth/login');


AuthRouter.post('/signup',signup);
AuthRouter.post('/login',login);

module.exports=AuthRouter;