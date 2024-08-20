import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HotelImage from "../../component/HotelImage/HotelImage";
import Navbar from "../../component/Navbar/Navbar";
import HotelDetails from "../../component/HotelDEtails/HotelDetails"
import Price from "../../component/Price/Price";
import { useDate } from "../../Context/DateContext";
function SingleHotel() {
  const { id } = useParams();
  const [singleHotel, SetSingleHotel] = useState([]);
  const{dateDispatch,hotelSelect}=useDate();
  useEffect(() => {
    (async () => {
      console.log(id);
      try {
        const {
          data: { hotel },
        } = await axios.get(`http://localhost:8090/api/hotel/${id}`);
      

        console.log(hotel);
        SetSingleHotel(hotel);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  
  const { name,address,price,numberOfguest,rating} = singleHotel;
  useEffect(()=>{
    dateDispatch({
      type:"DESTINATION",
      payload:address
     })
     dateDispatch({
      type:"SINGLE_HOTEL",
      payload:false
     })
    console.log(hotelSelect,name,address);
 
  },[singleHotel])
  
  return (
    <div>
      <header className="fixed top-0 w-screen ">
        <Navbar/>
      </header>
      <div className="mt-16">
        <h1 className="text-2xl font-semibold m-4 text-gray-700">
          {name},{address}
        </h1>
        <div className="flex justify-evenly">
          {singleHotel && singleHotel.length!==0 && <HotelImage singleHotel={singleHotel}/>}
        </div>
      </div>
     <div className="flex justify-between">
     <HotelDetails singleHotel={singleHotel}/>
      <Price hotelPrice={price} guest={numberOfguest} rating={rating}/>
     </div>
    </div>
  );
}

export default SingleHotel;
