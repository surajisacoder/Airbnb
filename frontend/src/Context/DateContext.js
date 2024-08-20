import { dateReducer } from "../reducer/DateReducer";
import { useContext,createContext,useReducer } from "react";

const intialState={
    checkInDate:null,
    checkOutDate:null,
    isSearchModalOpen:false,
    hotelSelect:"",
    hotelOption:false,
    guest:0,
    singlehotel:true
}

const DateContext=createContext()

const DateProvider=({children})=>{
    const[{checkInDate,checkOutDate,isSearchModalOpen,hotelSelect,hotelOption,guest,singlehotel},dateDispatch]=useReducer(dateReducer,intialState)
    return(
        <DateContext.Provider value={{checkInDate,checkOutDate,isSearchModalOpen,hotelSelect,hotelOption,guest,singlehotel,dateDispatch}}>{children}</DateContext.Provider>
    )
}

const useDate=()=> useContext(DateContext)

export {useDate,DateProvider};