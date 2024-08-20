const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();


const dbConnect= async()=>{
   try{ 
    const DB=await mongoose.connect(process.env.DB_URL);
   }
   catch(error){
    console.log("Some issue to connect Data Base");
   }
}

module.exports=dbConnect;