const express=require('express');
const mongoose=require('mongoose');
const Hotelrouter=require('./routes/hotelroute');
const dbConnect=require('./config/dbConnect');
const AuthRouter=require('./routes/authroute');
const WishlistRouter=require('./routes/wishlistroute');
const pagenotFound=require('./middleware/pagenotFound');
const cors=require("cors");
dbConnect();

const app=express();
app.use(express.json());
app.use(cors())
app.use("/api",Hotelrouter);
app.use("/api",AuthRouter);
app.use("/api",WishlistRouter);
const PORT=process.env.PORT||8090;

app.get('/',(req,res)=>{
   res.send("Hello Nitish");
})
 
app.use("*",pagenotFound);


mongoose.connection.once("open",()=>{
    console.log("Connected to DataBase");
    app.listen(PORT,(req,res)=>{
        console.log("Server started....")
    });
})

