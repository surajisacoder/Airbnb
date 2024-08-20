export const GetHotelbyBedrooms=(hotels,bathrooms,beds,bedrooms)=>{
    console.log({bathrooms,beds,bedrooms});
    if(bathrooms==='Any'||beds==='Any'||bedrooms==='Any'){
        return hotels
    }
    const filterHotel=hotels.filter(({numberOfBathrooms,numberOfBedrooms,numberOfBeds})=>Number(numberOfBathrooms)>=bathrooms||Number(numberOfBedrooms)>=bedrooms||Number(numberOfBeds)>=beds);
    return filterHotel;
}