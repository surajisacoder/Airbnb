
const Hotel=require('../../model/hoteldataschema');
const hoteldata= async (req,res)=>{
  try{
    let alldata
    const {category}=req.query;
 
    if(category){
      alldata=await Hotel.find({category:category});
     
    }
    else{
      alldata=await Hotel.find({});
    }
    res.json({
      success:true,
      alldata
    });
  }
  catch(err){
    console.log(err);
    res.status(404).json({
        message:"Some issue to fetch data"
    })
  }
}

module.exports=hoteldata;