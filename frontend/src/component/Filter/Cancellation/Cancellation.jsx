import React from 'react'
import "./Cancellation.css"
import { useFilter } from '../../../Context/FilterContext'
function Cancellation() {
  const {isCancel,filterDispatch}=useFilter();
  const handleIsCancel=(event)=>{
    filterDispatch({
      type:"ISCANCEL",
      payload:event.target.checked
    })
  }
  return (
    <div className='flex items-center gap-5'>
        <h3 className='text-xl text-gray-700 font-medium'>Free Cancellation</h3>
        <label class="switch">
        <input type="checkbox" value={isCancel} checked={isCancel} onChange={handleIsCancel}/>
        <span class="slider round"></span>
        </label>
    </div>
  )
}

export default Cancellation