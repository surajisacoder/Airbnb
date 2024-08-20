import { useContext,createContext,useReducer } from "react";
import { filterReducer } from "../reducer/FilterReducer";

const initialValue={
    isFilterModalOpen:false,
    PriceRange:[500,25000],
    Bedrooms:"Any",
    Bathrooms:"Any",
    Beds:"Any",
    Property:"Any",
    Ratings:1,
    isCancel:false
}

const FilterContext=createContext()

const FilterProvider=({children})=>{
    const[{isFilterModalOpen,PriceRange,Bedrooms,Bathrooms,Beds,Property,Ratings,isCancel},filterDispatch]=useReducer(filterReducer,initialValue)
    return(
        <FilterContext.Provider value={{isFilterModalOpen,PriceRange,Bedrooms,Bathrooms,Beds,Property,Ratings,isCancel,filterDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilter=()=>useContext(FilterContext);

export {useFilter,FilterProvider};