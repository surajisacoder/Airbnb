import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useFilter } from '../../../Context/FilterContext';

function valuetext(value) {
  return `${value}`;
}
const minDifference=500
export default function Price() {
 const {PriceRange,filterDispatch}=useFilter()

  const handleChange = (event, newValue,activeThumb) => {
    if(!Array.isArray(newValue)){
        return;
    }
    if(activeThumb===0){
        filterDispatch({
            type:"MIN_PRICE",
            payload:{
                newValue,
                PriceRange,
                minDifference
            }
        })
    }
    else{
        filterDispatch({
            type:"MAX_PRICE",
            payload:{
                newValue,
                PriceRange,
                minDifference
            }
        })
    }
  };

  return (
    <Box sx={{width:400}}>
      <Slider
        sx={{color:"#c2410c"}}
        getAriaLabel={() => 'Minimum Difference'}
        value={PriceRange}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={100}
        max={25000}
        disableSwap
      />
    </Box>
  );
}
