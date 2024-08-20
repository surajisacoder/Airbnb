const Category=require('../../model/categorySchema');

const hotelcategory=async (req,res)=>{
  try{
    const categorydata= await Category.find({});
    res.json({
        success:true,
        categorydata
    })
  }
  catch(err){
    console.log(err);
    res.status(404).json({
        success:false,
        message:"Category Not Found"
    })
  }
}

module.exports=hotelcategory;