export const wishlistReducer=(state,{type,payload})=>{
    switch(type){
        case "ADD_TO_WISHLIST":
            return{
                ...state,
                wishlist:[...state.wishlist,payload]
        
        }
        case "REMOVE_TO_WISHLIST":
            return{
                ...state,
                wishlist:state.wishlist.filter(hotel=>hotel._id!==payload._id)
            }
    }
}