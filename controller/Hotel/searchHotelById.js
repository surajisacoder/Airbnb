const Hotel=require('../../model/hoteldataschema');

const HotelById=async (req,res)=>{
    try{
   const {id} = req.params;
   const hotel= await Hotel.findById(id);
   res.json({
    success:true,
    hotel
   })
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            message:"Hotel Not Found"
        })
    }
}

module.exports=HotelById