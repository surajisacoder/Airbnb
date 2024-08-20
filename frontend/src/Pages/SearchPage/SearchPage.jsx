import React, { useState ,useEffect} from 'react'
import { useDate } from '../../Context/DateContext';
import Navbar from '../../component/Navbar/Navbar';
import axios from 'axios';
import Hotelcard from '../../component/HotelCard/Hotelcard';
function SearchPage() {
  const[SelectHotel,SetSelectHotel]=useState([])
  const{hotelSelect,guest}=useDate()
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
  const SearchHotel=SelectHotel.filter(({city,address,state,numberofguest})=>
city.toLowerCase().includes(hotelSelect.toLowerCase())||
address.toLowerCase().includes(hotelSelect.toLowerCase())||
state.toLowerCase().includes(hotelSelect.toLowerCase())||
numberofguest==guest
)

console.log(SearchHotel);
  return (
    <div>
        <header className='fixed w-full top-0'>
            <Navbar/>
        </header>
       
       <div className='flex mt-16 w-full flex-wrap absolute -z-[200]'>
       {SearchHotel && SearchHotel.map(hotel=><Hotelcard key={hotel._id} Hoteldetails={hotel}/>)}
       </div>
    </div>
  )
}

export default SearchPage