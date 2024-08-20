import { useContext,createContext,useReducer } from "react";
import { authReducer } from "../reducer/AuthReducer";
const intialValue={
    isAuthModalOpen:false,
    username:"",
    email:"",
    mobile:"",
    password:"",
    cPassword:"",
    selectAuth:"login",
    token:""
}
const AuthContext=createContext()

const AuthProvider=({children})=>{
    const[{isAuthModalOpen,username,email,mobile,password,cPassword,selectAuth,token},authDispatch]=useReducer(authReducer,intialValue)
    return(
        <AuthContext.Provider value={{isAuthModalOpen,username,email,mobile,password,cPassword, selectAuth,token,authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth=()=>useContext(AuthContext)

export {useAuth,AuthProvider}