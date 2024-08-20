export const findHotelInWishlist=(wishlist,id)=>{
    const isHotelPresent=wishlist.some(hotel=>hotel._id===id);
    return isHotelPresent;
}