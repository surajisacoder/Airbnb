import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from '../../Context/DateContext';
import './DatePicker.css'
function SelectDatePicker({scenario}) {
  const {dateDispatch,checkInDate,checkOutDate}=useDate()
  const HandleInputList=()=>{
    dateDispatch({
      type:"HIDE_LIST",
  })
  }

  const handleCheckInOut=(date)=>{
    dateDispatch({
      type:scenario==="in"?"CHECK_IN":"CHECK_OUT",
      payload:date
    })
  }
  return (
    <DatePicker selected={scenario==="in"?checkInDate:checkOutDate} onChange={(date)=>handleCheckInOut(date)} placeholderText='add date' onFocus={HandleInputList}
    className='w-[80%] text-center border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-700 focus:border-transparent -z-[50]'
    
    />
  )
}

export default SelectDatePicker