import React, { useState, useEffect } from "react";
import SelectDatePicker from "../DatePicker/DatePicker";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDate } from "../../Context/DateContext";
function SelectHotel() {
  const navigate=useNavigate()
  const { hotelSelect, hotelOption, dateDispatch,isSearchModalOpen } = useDate();
  const [selectHotel, SetSelectHotel] = useState([]);
 
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { alldata },
        } = await axios.get(`http://localhost:8090/api/hotel`);
        SetSelectHotel(alldata);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handelHotelSelect = (address) => {
    dateDispatch({
      type: "HOTEL",
      payload: address,
    });
    console.log("Hotel Clicked");
  };

  const handleHotelallOption = () => {
    dateDispatch({
      type: "HOTEL_LIST",
    });
  };

  const handleModal=()=>{
    dateDispatch({
     type:"MODAL",
     payload:!isSearchModalOpen
    })
    console.log("Modal clicked")
 }

 const allHotelList=selectHotel.filter(({city,address,state,country})=>
 city.toLowerCase().includes(hotelSelect.toLowerCase())||
 address.toLowerCase().includes(hotelSelect.toLowerCase())||
 state.toLowerCase().includes(hotelSelect.toLowerCase())||
 country.toLowerCase().includes(hotelSelect.toLowerCase())
)

const handleUserInputHotel=(e)=>{
  dateDispatch({
    type:"DESTINATION",
    payload:e.target.value
   })
}

const HandleNoOfGuest=(e)=>{
  dateDispatch({
    type:"GUEST",
    payload:e.target.value
   })
}

const handleSearchHotel=()=>{
   navigate(`/hotel/${hotelSelect}`)
}
  return (
    <div className="fixed flex flex-col h-full w-full z-[200] ">
      <div className=" fixed h-full w-full bg-black/50 z-60" onClick={handleModal}></div>
      <div className="flex p-2 bg-white z-[100] w-[52rem]  rounded-sm mt-16 self-start ml-48">
        <div className="flex flex-col">
          <label className="font-semibold">Where</label>
          <input
            placeholder="Search Destination"
            value={hotelSelect}
            onClick={handleHotelallOption}
            onChange={handleUserInputHotel}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Check in</label>
          <SelectDatePicker scenario="in"/>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Check out</label>
          <SelectDatePicker scenario="out" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">No. of Guests</label>
          <input placeholder="Add guests" onChange={HandleNoOfGuest} type="number"/>
        </div>
        <div className="flex items-center bg-orange-600 h-10 self-center p-2" onClick={handleSearchHotel}>
          <span class="material-symbols-outlined">search</span>
          <span className="font-bold">Search</span>
        </div>
      </div>
      {hotelOption && <div className='bg-white w-[20rem] p-1 mt-5 overflow-y-scroll  z-[100] self-start ml-48'>
        {  
            allHotelList &&  allHotelList.map(({address,city})=><p onClick={()=>handelHotelSelect(address)} className="cursor-pointer">{address},{city}</p>)
        }
        </div>}
    </div>
  );
}

export default SelectHotel;
