import React, { useState } from "react";
import { useDate } from "../../Context/DateContext";
import { useAuth } from "../../Context/AuthContext";
import Auth from "../Auth/Auth";
import Cookies from 'js-cookie';
import { useEffect } from "react";
function Navbar() {
  const {isSearchModalOpen,dateDispatch,checkInDate,checkOutDate,guest,hotelSelect,singlehotel}=useDate()
  const{isAuthModalOpen,authDispatch,token}=useAuth()
 
  useEffect(
     ()=>{
       const newtoken=Cookies.get('token');
       authDispatch({
        type:'TOKEN',
        payload:newtoken
       })
     },[]
  )
       
  const handleModal=()=>{
     dateDispatch({
      type:"MODAL",
      payload:!isSearchModalOpen
     })
  }
  const handleAuthModal=()=>{
    authDispatch({
      type:"MODAL"
     })
  }
  const handleLogout=()=>{
    Cookies.remove('token')
    Cookies.remove('id')
   authDispatch({
    type:'CLEAR_TOKEN',
   })
  }
  return (
    <div>
     {isAuthModalOpen && <Auth/>}
    <nav className="flex justify-between items-center h-16 border-b-2 border-gray-400 max-w-screen bg-white z-50">
      <div className="ml-10 h-full flex items-center">
        <img src="data:image/png;base64,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" alt="" className="h-[60%]" />
        <h1 className="text-2xl text-orange-600 bg-white font-mono">
          AirBNB
        </h1>
      </div>
      <div className="flex items-center gap-2 border-2 border-gray-400 h-10 font-serif font-semibold bg-white shadow-xl  " onClick={handleModal}>
        <span className="border-r-2 border-gray-400 pr-2 pl-1">{hotelSelect||"Any Where"}</span>
        <span className="border-r-2 border-gray-400 pr-2">{checkInDate&&checkOutDate?`${checkInDate.toLocaleDateString("en-us",{day:"numeric",month:"short"})}-${checkOutDate.toLocaleDateString("en-us",{day:"numeric",month:"short"})}`:"Any Week"}</span>
        <span className="">{guest||"Add Guests"}</span>
        {singlehotel?
       <div className="h-full w-10 flex justify-center items-center bg-orange-600">
       <span className="material-symbols-outlined text-3xl text-white font-bold">
          search
        </span>
       </div>
       :""
}
      </div>
      <div className="flex items-center gap-6">
      <i className="material-icons">favorite</i>
      {token? <span className="mr-6 font-bold text-orange-800 cursor-pointer"onClick={handleLogout}>Logout</span>:
      <div className="mr-6 h-fit flex items-center w-fit border hover:shadow-lg shadow-gray-500" onClick={handleAuthModal}>
        <span className="material-symbols-outlined text-3xl cursor-pointer">
          menu
        </span>
        <span className="material-symbols-outlined cursor-pointer bg-slate-400">
           person
        </span>
      </div>
}
</div>
    </nav>
     
    </div>
  );
}

export default Navbar;
