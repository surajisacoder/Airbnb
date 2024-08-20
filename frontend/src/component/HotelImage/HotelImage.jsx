import React, { useEffect } from "react";

function HotelImage({ singleHotel }) {
    
    const { name, image, imageArr } = singleHotel;
  return (
    <div className="flex flex-col h-[27rem]">
        <div className="flex h-full gap-1 w-[60rem]">
          <div className=" h-full w-[30rem]">
            <img
              src={image}
              alt={name}
              className="h-full w-full  object-center object-fill"
            />
          </div>
          <div className="flex h-full w-[28rem] flex-wrap gap-1">
            {imageArr.map((image) => (
              <img
                src={image}
                alt={name}
                className="h-[13.5rem] w-[13rem] object-center object-fill"
              />
            ))}
          </div>
        </div>
    </div>
  );
}

export default HotelImage;
