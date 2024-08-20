import React from 'react'
import { v4 as uuid} from 'uuid';
import { useFilter } from '../../../Context/FilterContext';
const item=[{id:uuid(),type:1},{id:uuid(),type:2},{id:uuid(),type:3},{id:uuid(),type:4}]
function Rating() {
  const {Ratings,filterDispatch}=useFilter();
  const handleRating=(type)=>{
       filterDispatch({
        type:"RATING",
        payload:type
       })
  } 
  console.log(Ratings);
  return (
        <div className='flex flex-col gap-3 mb-5'>
      <h3 className='font-medium text-xl text-gray-700'>
        Ratings
      </h3>
      <div className='flex '>
        {item.map(({id,type})=><p key={id} className={`h-8 w-16 border-2 border-gray-500 text-center mr-5 text-gray-400 cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center ${Ratings===type?"bg-black text-white":""}`} onClick={()=>handleRating(type)}>{type} &Up</p>)}
      </div>
    </div>
  )
}

export default Rating