export const GetHotelBYProperty=(hotels,property)=>{
    if(property==='Any'){
        return hotels;
    }

    const filterHotel=hotels.filter(hotel=>hotel.propertyType===property);

    return filterHotel;
}