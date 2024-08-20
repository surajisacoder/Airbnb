export const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "MODAL":
      return {
        ...state,
        isSearchModalOpen: payload,
      };
    case "HOTEL":
      return {
        ...state,
        hotelSelect: payload,
      };
    case "HOTEL_LIST":
      return {
        ...state,
        hotelOption: true,
      };
    case "HIDE_LIST":
      return {
        ...state,
        hotelOption: false,
      };
    case "CHECK_IN":
      return {
        ...state,
        checkInDate: payload,
      };
    case "CHECK_OUT":
      return {
        ...state,
        checkOutDate: payload,
      };
    case "DESTINATION":
      return {
        ...state,
        hotelSelect: payload,
      };
      case "GUEST":
         return {
           ...state,
           guest: payload,
         };
         case "SINGLE_HOTEL":
         return {
           ...state,
           singlehotel: payload,
         };
         case "CLEAR_ALL":
          return {
            ...state,
            checkInDate:null,
            checkOutDate:null,
            isSearchModalOpen:false,
            hotelSelect:"",
            hotelOption:false,
            guest:0,
            singlehotel:true
          };
  }
};
