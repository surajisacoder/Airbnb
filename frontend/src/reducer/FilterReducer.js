
export const filterReducer=(state,{type,payload})=>{
       switch(type){
        case "MODAL_OPEN":
            return{
           ...state,
           isFilterModalOpen:true
        }
        case "MODAL_CLOSE":
            return{
           ...state,
           isFilterModalOpen:false
        }
        case "MIN_PRICE":
            return{
           ...state,
           PriceRange:[Math.min(payload.newValue[0],payload.PriceRange[1]-payload.minDifference),payload.PriceRange[1]]
        }
        case "MAX_PRICE":
            return{
           ...state,
           PriceRange:[payload.PriceRange[0],Math.max(payload.newValue[1],payload.PriceRange[0]+payload.minDifference)]
        }
        case "BATHROOMS":
            return{
           ...state,
           Bathrooms:payload==="Any"?"Any":payload==="5+"?5:Number(payload)
        }
        case "BEDS":
            return{
           ...state,
           Beds:payload==="Any"?"Any":payload==="5+"?5:Number(payload)
        }
        case "BEDROOMS":
            return{
           ...state,
           Bedrooms:payload==="Any"?"Any":payload==="5+"?5:Number(payload)
        }
        case "PROPERTY":
            return{
           ...state,
           Property:payload
        }
        case "RATING":
            return{
           ...state,
           Ratings:payload
        }
        case "ISCANCEL":
            return{
           ...state,
           isCancel:payload
        }
        case 'CLEAR':
            return{
                ...state,
                PriceRange:[500,25000],
                Bedrooms:"Any",
                Bathrooms:"Any",
                Beds:"Any",
                Property:"Any",
                Ratings:1,
                isCancel:false
            }
       }
}