import React from 'react'
import Price from './Price/Price'
import BedBathroom from './BedBathroom/BedBathroom'
import Property from './Property/Property'
import Rating from './Rating/Rating'
import Cancellation from './Cancellation/Cancellation'
import { useFilter } from '../../Context/FilterContext'
function Filter() {
    const{filterDispatch}=useFilter()
    const HandleFilterModal=()=>{
        filterDispatch({
            type:"MODAL_CLOSE"
          })   
    }
    const HandleClearAll=()=>{
        filterDispatch({
            type:"CLEAR"
        })
    }
  return (
    <div className='flex flex-col fixed h-full w-full z-[200]'>
        <div className='absolute w-full bg-black/50 h-full -z-20' onClick={HandleFilterModal}></div>
        <div className='h-[70%] w-[40%] bg-white z-[100] self-center mt-16 rounded-md border-[1px] border-black pl-5 flex flex-col gap-9 overflow-y-auto '>
            <h3 className='font-medium text-lg text-gray-500 text-center'>Filters</h3>
            <div>
            <h3 className='font-medium text-xl text-gray-700'>Price Range</h3>
            <Price/>
            </div>
            <BedBathroom/>
            <Property/>
            <Rating/>
            <Cancellation/>
            <div className='flex justify-between mb-8'>
                <button className='font-semibold text-slate-400 text-lg underline' onClick={HandleClearAll}>
                    Clear All
                </button>
                <button className="bg-orange-700 text-white font-bold p-2 w-20 mr-7 rounded-lg">
                    Apply
                </button>
            </div>
        </div>
    </div>
  )
}

export default Filter