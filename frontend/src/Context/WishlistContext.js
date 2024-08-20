import { useContext,createContext,useReducer } from "react";
import { wishlistReducer } from "../reducer/WishlistReducer";
const intialValue={
    wishlist:[]
}


const WishlistContext=createContext();

const WishlistProvider=({children})=>{
    const[{wishlist},wishlistDispatch]=useReducer(wishlistReducer,intialValue);
    return(
        <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
            {children}
        </WishlistContext.Provider>
    )
}

const useWishlist=()=>useContext(WishlistContext);

export{useWishlist,WishlistProvider}