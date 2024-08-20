import React from 'react'
import { useFilter } from '../../../Context/FilterContext'
const item=["Any","1",'2',"3","4","5+"]
function BedBathroom() {
  const{Bedrooms,Bathrooms,Beds,filterDispatch}=useFilter();

  const HandleBedrooms=(val)=>{
      filterDispatch({
        type:"BEDROOMS",
        payload:val
      })
  }
  const HandleBeds=(val)=>{
    filterDispatch({
      type:"BEDS",
      payload:val
    })
  }

  const HandleBathrooms=(val)=>{
    filterDispatch({
      type:"BATHROOMS",
      payload:val
    })
  }


  return (
    <div>
    <h3 className='font-medium text-xl text-gray-700'>Rooms And Beds</h3>
    <div className='flex items-center gap-5'>
    <div className='flex flex-col gap-8'>
         <h4 className='font-medium text-lg text-gray-600'>Bedrooms</h4>
         <h4 className='font-medium text-lg text-gray-600'>Beds</h4>
         <h4 className='font-medium text-lg text-gray-600'>Bathrooms</h4>
     </div>
     <div className='flex flex-col gap-8'>


     <div className='flex'>{item.map(value=><p key={value} className={`h-8 w-8 rounded-full border-2 border-gray-500 text-center mr-5 text-gray-400 cursor-pointer hover:bg-black hover:text-white ${Bedrooms===value?"bg-black text-white":Bedrooms===5 && value==="5+"?"bg-black text-white":Bedrooms===Number(value)?"bg-black text-white":""}`}onClick={()=>HandleBedrooms(value)}>{value}</p>)}</div>



     <div className='flex'>{item.map(value=><p key={value} className={`h-8 w-8 rounded-full border-2 border-gray-500 text-center mr-5 text-gray-400 cursor-pointer hover:bg-black hover:text-white ${Beds===value?"bg-black text-white":Beds===5 && value==="5+"?"bg-black text-white":Beds===Number(value)?"bg-black text-white":""}`} onClick={()=>HandleBeds(value)}>{value}</p>)}</div>



     <div className='flex'>{item.map(value=><p key={value} className={`h-8 w-8 rounded-full border-2 border-gray-500 text-center mr-5 text-gray-400 cursor-pointer hover:bg-black hover:text-white ${Bathrooms===value?"bg-black text-white":Bathrooms===5 && value==="5+"?"bg-black text-white":Bathrooms===Number(value)?"bg-black text-white":""}`} onClick={()=>HandleBathrooms(value)}>{value}</p>)}</div>
         
     </div>
    </div>
     </div>
  )
}

export default BedBathroom