const CategoryData=require('../../Data/category');
const Category=require('../../model/categorySchema');

const CategoryallData=async (req,res)=>{
    try{
        await Category.deleteMany({})
     const data=await Category.insertMany(CategoryData.data);
     if(data){
        res.json({
            success:true,
            data
        });
     }
    }
    catch(err){
        console.log(err);
    }
}
module.exports=CategoryallData;