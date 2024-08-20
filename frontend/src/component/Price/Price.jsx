import React from "react";
import { useDate } from "../../Context/DateContext";
import SelectDatePicker from "../DatePicker/DatePicker";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "../../Context/AuthContext";
function Price({ hotelPrice, guest, rating }) {
  const navigate = useNavigate();
  const { checkInDate, checkOutDate, dateDispatch } = useDate();
  const { authDispatch } = useAuth();
  const token = Cookies.get("token");
  const calculateDaysBetweenDates = (startDate, endDate) => {
   
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime(); // Difference in milliseconds
    const differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
    const days = Math.ceil(differenceInDays); // Round up to the nearest whole number
    return days < 0 ? 0 : days;
  };
  const days = calculateDaysBetweenDates(checkInDate, checkOutDate);
  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const totalAmount = days * hotelPrice + 150;
  const HandlePayment = async () => {
    if(checkInDate===checkOutDate){
      window.alert("CheckIn and Checkout must be Different");
      return;
    }
    if (days === 0) {
      window.alert("Please Add both CheckIn and CheckOut First");
      return;
    }
    
    if (!token) {
      authDispatch({
        type: "MODAL",
      });
      return;
    }
   
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      console.log({ message: "Razorpay SDK failed to load" });
    }

    const options = {
      key: "rzp_test_ap8imiCtiRbpSY",
      amount: totalAmount * 100,
      currency: "INR",
      name: "AirBNB",
      email: "nitish@gmail.com",
      contact: "8864093088",
      description: "Thank you for booking with us",

      handler: ({ payment_id }) => {
        // setHotel({...singleHotel, orderId: uuid(),
        // payment_id,
        // checkInDate: checkInDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
        // checkOutDate: checkOutDate.toLocaleDateString("en-US", { day: "numeric", month: "short" }),
        // totalPayableAmount});
        navigate("/");
      },
      prefill: {
        name: "Nitish Kumar",
        email: "nitish@gmail.com",
        contact: "8888665544",
      },
      theme: {
        color: "#F37254", // Change the color of the checkout form
      },
      payment_method: {
        cards: true,
        netbanking: true,
        wallets: true,
        upi: true, // Enable UPI payments
      },
      modal: {
        // Enable QR code display
        enable: true,
        // Customizing QR code options
        qr: {
          label: "Scan with Razorpay",
          display_name: "AirBNB",
          fallback_url: "https://www.airbnb.com",
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="h-96 w-80 flex flex-col gap-5  p-4 shadow-sm shadow-black rounded-md border-[1px] border-black m-16">
      <div className="flex justify-between">
        <p className="font-bold text-black">
          Rs {hotelPrice}{" "}
          <span className="text-gray-500 font-medium">night</span>
        </p>{" "}
        <p className="flex items-center">
          <span class="material-symbols-outlined">star</span>
          {rating}
        </p>
      </div>
      <div className={`flex justify-between`}>
        <div className="flex flex-col">
          <label className="font-semibold">Check in</label>
          <SelectDatePicker scenario="in" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Check out</label>
          <SelectDatePicker scenario="out" />
        </div>
      </div>
      <div className="w-72 h-16 border-[1px] border-black p-1">
        <h1 className="font-semibold text-lg">GUESTS</h1>
        <p>{guest ? guest : 5} guests</p>
      </div>
      <div onClick={HandlePayment}>
        <button className=" h-10 w-72 bg-orange-700 text-white font-bold text-xl rounded-md">
          Reserve
        </button>
      </div>
      <div>
        <div className="border-b-[1px] border-black mb-2">
          <p className="flex justify-between mb-2">
            <span>
              Rs {hotelPrice} x {days} nights
            </span>{" "}
            <span>Rs {hotelPrice * days}</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Service fee</span> <span>Rs 150</span>
          </p>
        </div>
        <p className="flex justify-between">
          <span>Total</span>
          <span> Rs {totalAmount}</span>
        </p>
      </div>
    </div>
  );
}

export default Price;
