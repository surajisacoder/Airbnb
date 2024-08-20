import React from "react";

function HotelDetails() {
  return (
    <div className="flex flex-col m-6">
      <div className="flex flex-col border-b-2 border-gray-600 m-4">
        <h3 className="text-xl">Hosted by Daleep</h3>
        <p className="text-lg">2 Guests,1Bedroom,1 Bed,1 Bathroom</p>
      </div>
     <div className="flex flex-col border-b-2 border-gray-600 m-4 gap-4">
     <div className="flex flex-col ">
        <div className="flex items-center">
          <span class="material-symbols-outlined">workspaces</span>
          <span className="font-medium">Dedicated Workspace</span>
        </div>
        <p>A common area with wifi that is well suited for working</p>
      </div>
      <div>
        <div className="flex items-center">
          <span class="material-symbols-outlined">home_pin</span>
          <span className="font-medium">Great Location</span>
        </div>
        <p>80% of recent guests gave the location of 5-star rating</p>
      </div>
      <p>
        <span class="material-symbols-outlined">free_cancellation</span>Free
        Cancellation before 7 days of booking
      </p>
     </div>
      <div className="flex flex-col m-4">
        <h2 className="text-xl font-medium">What this place Offer</h2>
        <div className="m-4 flex flex-col gap-4">
          <div className="flex gap-5">
            <p>
              <span class="material-symbols-outlined">kitchen</span>
              <span>Kitchen</span>
            </p>
            <p>
              <span class="material-symbols-outlined">wifi</span>
              <span>Wifi</span>
            </p>
          </div>
          <div className="flex gap-5">
            <p>
              <span class="material-symbols-outlined">park</span>
              <span>Free Parking on premises</span>
            </p>
            <p>
              <span class="material-symbols-outlined">dishwasher</span>
              <span>Washing Machine</span>
            </p>
          </div>
          <div className="flex gap-5">
            <p>
              <span class="material-symbols-outlined">workspaces</span>
              <span>Dedicated Workspaces</span>
            </p>
            <p>
              <span class="material-symbols-outlined">balcony</span>
              <span>Patio or Balcony</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelDetails;
