import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../component/Navbar/Navbar'
import Hotelcard from '../../component/HotelCard/Hotelcard'
import InfiniteScroll from 'react-infinite-scroll-component'
import Category from '../../component/Category/Category'
import { useCategory } from '../../Context/CategoryContext'
import SelectHotel from '../../component/SelectHotelByDate/SelectHotel'
import { useDate } from '../../Context/DateContext'
import Filter from '../../component/Filter/Filter'
import { useFilter } from '../../Context/FilterContext'
import { getHotelbyPrice } from '../../utils/getHotelbyPrice'
import { GetHotelbyBedrooms } from '../../utils/GetHotelBYBedBathrooms'
import { GetHotelBYProperty } from '../../utils/GetHotelBYProperty'
import { GetHotelByRating } from '../../utils/GetHotelByRating'
import { GetHotelByCancellation } from '../../utils/GetHotelByCancellation'
import { useAuth } from '../../Context/AuthContext'
import Cookies from 'js-cookie';
function Home() {
   const[hasmore,setHasMore]=useState(true);
   const[currentIndex,setCurrentIndex]=useState(8);
   const[testData,setTestData]=useState([])
   const[hotel,SetHotel]=useState([]);
   const{hotelcategory,setHotelCategory}=useCategory();
   const {isSearchModalOpen,dateDispatch}=useDate();
   const {PriceRange,Bedrooms,Bathrooms,Beds,isFilterModalOpen,Property,Ratings,isCancel}=useFilter();
   const {authDispatch}=useAuth();
  useEffect(()=>{
      ( async()=>{
        try{
        const {data:{alldata}} =await axios.get(`http://localhost:8090/api/hotel/?category=${hotelcategory}`);

        console.log(alldata);
        setTestData(alldata);
        SetHotel(alldata?alldata.slice(0,8):[]);
        
        } 
       catch(err){
            console.log(err);
          }
      }  
      )()
      return () => {
        window.scrollTo(0, 0);
     
      };
  },[hotelcategory])
  
 
  const fetchMoreData=()=>{
    if(hotel.length===testData.length){
      setHasMore(false);
      return;
    }
    setTimeout(()=>{
      if(hotel && hotel.length>0){
        SetHotel(hotel.concat(testData.slice(currentIndex,currentIndex+8)));
        setCurrentIndex(prev=>prev+8);
      }
      else{
        SetHotel([]);
      }
    },2000)
  }
  useEffect(()=>{
    if (window.location.pathname === '/') {
      dateDispatch({
        type:'CLEAR_ALL'
      })
        }
  },[])
  const filterHotel=getHotelbyPrice(testData,PriceRange)
  const FilterHotelByBeds=GetHotelbyBedrooms(filterHotel,Bathrooms,Beds,Bedrooms);
  const FilterHotelByProperty=GetHotelBYProperty(FilterHotelByBeds,Property);
  const FilterHotelByRating=GetHotelByRating(FilterHotelByProperty,Ratings);
  const FilterHotelByCancellation=GetHotelByCancellation(FilterHotelByRating,isCancel);
  
  return (
    <div>
       <header className="fixed w-screen z-50">
       <Navbar/>
       <section  className=' w-full  bg-white z-40'>
          <div className='w-[96%] flex items-center justify-between m-auto'>
          <Category/>
          </div>
       </section>
       </header>
        <div className='z-70'>
       {isSearchModalOpen && <SelectHotel/>}
       </div>
       {isFilterModalOpen && <Filter/>}
        {
          FilterHotelByCancellation && FilterHotelByCancellation.length >0?(
           <InfiniteScroll
            dataLength={hotel.length}
            next={fetchMoreData}
            hasMore={hasmore}
            loader={hotel.length>0 && <h1>Loading.....</h1>}
            endMessage={<p>You have seen it all</p>}
           >
           <main className={`flex flex-wrap mt-28 ${isSearchModalOpen?"overflow-hidden":'overflow-auto  relative'} `}>
        {
         FilterHotelByCancellation.map(hotel=><Hotelcard key={hotel._id} Hoteldetails={hotel}/>)
        }
        </main>
           </InfiniteScroll>
          ):(<></>)
        }
    </div>
  )
}

export default Home