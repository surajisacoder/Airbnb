const alldata=require('../../Data/hoteldata');
const Hotel=require('../../model/hoteldataschema');

const InsertDataToDb=async (req,res)=>{
    try{
        await Hotel.deleteMany({});
       const hoteldata=await Hotel.insertMany(alldata.data)
    
      if(hoteldata){
        res.json({
            success:true,
            data:hoteldata,
        })
      }
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            message:"Not Inserted in DB"
        })
    }
}
module.exports=InsertDataToDb;