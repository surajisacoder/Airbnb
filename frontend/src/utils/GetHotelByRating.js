export const GetHotelByRating=(hotels,rating)=>{
    if(rating===1){
        return hotels;
    }

    const filterHotel=hotels.filter(hotel=>hotel.rating>=rating);

    return filterHotel;
}