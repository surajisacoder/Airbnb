import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { useNavigate  } from 'react-router-dom'
import { validatePassword } from '../../utils/Password-RegEX'
import { validateNumber } from '../../utils/Number-RegEx'
import { UserLogin } from '../../Services/Login-Service'
function Login() {
  const{mobile,password,authDispatch,token}=useAuth()
  console.log({mobile,password});
  const HandleLoginNumber=(e)=>{
    const isValidateNumber=validateNumber(e.target.value)
     if(isValidateNumber){
       authDispatch({
         type:"NUMBER",
         payload:e.target.value
       })
     }
     else{
       console.log("Invalid Input")
      }
   }
   const HandleLoginpass=(e)=>{
    const isValidatePass=validatePassword(e.target.value)
     if(isValidatePass){
       authDispatch({
         type:"PASSWORD",
         payload:e.target.value
       })
     }
     else{
       console.log("Invalid Input")
      }
   }
  
   const HandleUserLogin=(e)=>{
    e.preventDefault()  
    
   const isValidateMobile = validateNumber(mobile);
   const isValidatePass = validatePassword(password);
     if( isValidateMobile && isValidatePass){
       const {token}= UserLogin(mobile,password);
        authDispatch({
          type:'TOKEN',
          payload:token
         })
          authDispatch({
            type:"MODAL_CLOSE"
        })
           authDispatch({
             type:"CLEAR_ALL",
           })
      window.location.reload();
       
     }
     else{
       console.log("Something Went Wrong");
     }
   }

   const handleLoginCredentials= async ()=>{
     const {token}=  await UserLogin(9905070812,"Abcd@1234");
     console.log(token);
     authDispatch({
      type:'TOKEN',
      payload:token
     })
      authDispatch({
        type:"MODAL_CLOSE"
    })
   }
   console.log(token)
  return (
    <div className='flex flex-col gap-8 w-96 h-fit border-[1px] border-black p-2  bg-white'>
      <form onSubmit={HandleUserLogin}>
      <div>
        <label className='font-bold'>Mobile No</label>
        <input type="number" defaultValue={mobile} placeholder='xyz@gmail.com' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg' required onChange={HandleLoginNumber}/>
      </div>
      <div>
        <label className='font-bold'>Enter Password</label>
        <input type="password" defaultValue={password} placeholder='******' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center' required onChange={HandleLoginpass}/>
      </div>
      <button className='bg-orange-700 w-[50%] m-auto p-2 rounded-md text-white font-semibold'>Login</button>
      </form>
      <span className=' text-gray-600 font-semibold text-center'>Or</span>
      <button className='bg-orange-700 w-[50%] m-auto p-2 rounded-md text-white font-semibold' onClick={handleLoginCredentials}>Login with Credentials</button>
    </div>
  )
}

export default Login
