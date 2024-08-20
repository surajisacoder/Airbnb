import React from 'react'
import { v4 as uuid} from 'uuid';
import { useFilter } from '../../../Context/FilterContext';
const item=[{id:uuid(),type:"House"},{id:uuid(),type:" Guest House"},{id:uuid(),type:"Flat"},{id:uuid(),type:"Hotel"}]
function Property() {
  const {Property,filterDispatch}=useFilter();

  const HandleProperty=(val)=>{
    filterDispatch({
      type:"PROPERTY",
      payload:val
    })
  }
  console.log(Property)
  return (
    <div className='flex flex-col gap-3'>
      <h3 className='font-medium text-xl text-gray-700'>
        Property Type
      </h3>
      <div className='flex '>
        {item.map(({id,type})=><p key={id} className={`h-16 w-16 border-2 border-gray-500 text-center mr-5 text-gray-400 cursor-pointer hover:bg-black hover:text-white rounded-md flex items-center justify-center ${Property===type?"bg-black text-white":""}`} onClick={()=>HandleProperty(type)}>{type}</p>)}
      </div>
    </div>
  )
}

export default Property