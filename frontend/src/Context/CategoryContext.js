import { createContext,useContext,useState } from "react";

const CategoryContext=createContext();

const CategoryProvider=({children})=>{
    const [hotelcategory,setHotelCategory]=useState("");
   return(
    <CategoryContext.Provider value={{hotelcategory,setHotelCategory}}>
        {children}
    </CategoryContext.Provider>
   )
}

const useCategory=()=>useContext(CategoryContext);

export {useCategory,CategoryProvider};