import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../Context/WishlistContext";
import { findHotelInWishlist } from "../../utils/handleWishlist";
import Auth from "../Auth/Auth";
import Cookies from 'js-cookie';
import { useAuth } from "../../Context/AuthContext";
import { useDate } from "../../Context/DateContext";
function Hotelcard({ Hoteldetails }) {
  const{authDispatch}=useAuth()
  const hotelNavigate = useNavigate();
  const{wishlist,wishlistDispatch}=useWishlist();
  const {dateDispatch}=useDate();
  console.log(wishlist);
  const { price, rating, country, image, address, name, _id } = Hoteldetails;
  const visitSingleHotelPage = () => {
    dateDispatch({
      type:"SINGLE_HOTEL",
      payload:false
     })
    hotelNavigate(`/hotel/${_id}/reserve`);
    console.log(price, rating);
  };
  const isPresent=findHotelInWishlist(wishlist,_id);
  const AddHotelToWishlist=()=>{
    const token=Cookies.get('token');
    if(!token){
      authDispatch({
        type:"MODAL"
       })
       return;
    }
    if(!isPresent){
      wishlistDispatch({
        type:"ADD_TO_WISHLIST",
        payload:Hoteldetails
      })
    }
    else{
      wishlistDispatch({
        type:"REMOVE_TO_WISHLIST",
        payload:Hoteldetails
      })
    }
  }
  return (
    <div
      className="flex flex-col h-80  w-60 m-6 border-2 border-gray-400 gap-2 pb-2 relative"
      onClick={visitSingleHotelPage}
    > 
       <i className={`material-icons absolute ${isPresent?"text-red-600":" text-gray-600"} cursor-pointer right-0 z-10 m-2`} onClick={(e) => {
       e.stopPropagation()
      AddHotelToWishlist()
    }}>favorite</i>
      <div className="h-[12rem] w-[100%] relative">
     
        <img
          src={image}
          alt={name}
          className="h-full w-full  object-center object-fill"
        />
      </div>
      <div className="flex justify-between pl-2">
        <p>
          <span className="font-bold">
            {address},{country}
          </span>
        </p>
        <div className="flex">
          <span class="material-symbols-outlined">grade</span>
          <p className="font-bold text-green-700">{rating}</p>
        </div>
      </div>
      <p className="pl-2 font-semibold">{name}</p>
      <div className="flex pl-2">
        <span class="material-symbols-outlined text-orange-600">
          currency_rupee
        </span>
        <h3 className="font-semibold">{price} /</h3>
        <p className="pl-2">Night</p>
      </div>
    </div>
  );
}

export default Hotelcard;
