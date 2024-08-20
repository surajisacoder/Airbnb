export const getHotelbyPrice=(hotels,range)=>{
   const filterHotel=hotels.filter(hotel=>hotel.price>=range[0]&&hotel.price<range[1])

   return filterHotel;
}