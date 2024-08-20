import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useCategory } from '../../Context/CategoryContext';
import { useFilter } from '../../Context/FilterContext';
function Category() {
    const[category,setCotegory]=useState([])
    const[index,setIndex]=useState(0);
    const{setHotelCategory}=useCategory();
    const{filterDispatch}=useFilter()
   useEffect(()=>{
      ( async ()=>{
         try{
           const {data:{categorydata}}= await axios.get("http://localhost:8090/api/hotelcategory");
           setCotegory(categorydata.slice(index,index+8));
         }
         catch(err){
            console.log(err);
         }
      })()
    },[index])
    const handleLeftCategory=()=>{
      setIndex(prev=>prev-8);
    }
    const handleRightCategory=()=>{
        setIndex(prev=>prev+8);
    }

    const selectCategory=(category)=>{
        setHotelCategory(category);
    }

    const handleFilterModal=()=>{
        filterDispatch({
          type:"MODAL_OPEN"
        })
        
    }
  return (
    <>
     {
        index>=8 &&  <button onClick={handleLeftCategory}>
        <span className="material-symbols-outlined text-orange-600">
    chevron_left
    </span>
        </button>
     }
     {
        category.map(({_id,category})=> <span key={_id} className='m-4 text-lg text-gray-600 font-semibold cursor-pointer hover:text-orange-600' onClick={()=>selectCategory(category)}>{category}</span>)
     }
    {
        index-8<category.length&& <button onClick={handleRightCategory}>
        <span class="material-symbols-outlined text-orange-600 ">
   chevron_right
   </span>
        </button>
        
    }
     <button className='flex items-center font-bold text-gray-600' onClick={handleFilterModal}>
         <span class="material-symbols-outlined text-gray-600">
    filter_alt
    </span>
    Filter
         </button>
    </>
  )
}

export default Category