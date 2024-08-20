export const GetHotelByCancellation=(hotels,cancel)=>{
     if(cancel===false){
        return hotels;
     }
    const filterHotel=hotels.filter(hotel=>hotel.isCancelable>=cancel);

    return filterHotel;
}