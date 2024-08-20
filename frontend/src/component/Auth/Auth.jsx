import React from 'react'
import Login from './Login'
import { useAuth } from '../../Context/AuthContext'
import Signup from './Signup'
function Auth() {
    const{authDispatch, selectAuth}=useAuth()
  const handleAuthModal=()=>{
    authDispatch({
        type:"MODAL_CLOSE"
    })
}
  const handleSignup=()=>{
    authDispatch({
        type:"SIGNUP"
    })
  }

  const handleLogin=()=>{
    authDispatch({
        type:"LOGIN"
    })
  }
  return (
    <div className='flex flex-col fixed h-full w-full '>
    <div className='absolute w-full bg-black/50 h-full  -z-30' onClick={handleAuthModal}></div>
    <div className='self-center mt-10'>
        <div className='flex'>
        <button className={` text-black p-2 m-2 font-bold rounded-xl ${selectAuth==="login"? "bg-orange-700 text-white" : "bg-white"}`} onClick={handleLogin}>Login</button>
        <button className={`p-2 m-2 font-bold rounded-xl ${selectAuth==="signup"? "bg-orange-700 text-white" : "bg-white text-black"}`} onClick={handleSignup}>Signup</button>
        </div>
        {
            selectAuth==="login"?<Login/>:selectAuth==="signup"?<Signup/>:<></>
        }
    </div>
   </div>
  )
}

export default Auth