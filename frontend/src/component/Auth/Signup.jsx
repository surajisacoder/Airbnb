import React from 'react'
import { useAuth } from '../../Context/AuthContext'
import { validateEmail } from '../../utils/Email-RegEx';
import { validateName } from '../../utils/Name-RegEx';
import { validateNumber } from '../../utils/Number-RegEx';
import { validatePassword } from '../../utils/Password-RegEX';
import { UserSignUP } from '../../Services/SignUp-Service';
// let isValidateName,isValidateEmail,isValidateMobile,isValidatePass,isValidateCpass;
function Signup() {
  const{username,email,mobile,password,cPassword,authDispatch}=useAuth();
  console.log({username,email,mobile,password,cPassword})
  const HandleSignupName=(e)=>{
   const isValidateName=validateName(e.target.value);
   
    if(isValidateName){
      authDispatch({
        type:"NAME",
        payload:e.target.value
      })
    }
    else{
      console.log("Invalid Input")
    }
  }
  const HandleSignupEmail=(e)=>{
   const isValidateEmail=validateEmail(e.target.value)
    if(isValidateEmail){
      authDispatch({
        type:"EMAIL",
        payload:e.target.value
      })
    }
    else{
      console.log("Invalid Input")
     }
  }
  
  const HandleSignupMobile=(e)=>{
    const isValidateMobile=validateNumber(e.target.value)
    if(isValidateMobile){
      authDispatch({
        type:"NUMBER",
        payload:e.target.value
      })
    }
   else{
    console.log("Invalid Input")
   }
  }

  const HandleSignuppass=(e)=>{
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
  const HandleSignupCpassword=(e)=>{
  const isValidateCpass=validatePassword(e.target.value)
   if(isValidateCpass){
    authDispatch({
      type:"CONFIRM_PASSWORD",
      payload:e.target.value
    })
   }
   else{
    console.log("Invalid Input")
   }
  }
  const HandleUserSignup=(e)=>{
    e.preventDefault()
     
  const isValidateName = validateName(username);
  const isValidateEmail = validateEmail(email);
  const isValidateMobile = validateNumber(mobile);
  const isValidatePass = validatePassword(password);
  const isValidateCpass = validatePassword(cPassword);
    if(isValidateName &&isValidateEmail && isValidateMobile && isValidatePass && isValidateCpass){
       const {token}=UserSignUP(username,email,mobile,password,cPassword);
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
  
  return (
    <div className='flex flex-col gap-8 w-96 h-[28rem] border-[1px] border-black p-2 m-auto  bg-white overflow-auto'>
      <form onSubmit={HandleUserSignup}>
    <div>
        <label className='font-bold '>Enter Name</label>
      <input type="text"placeholder='Enter Your Name' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg' required onChange={HandleSignupName}/>
    </div>
    <div>
    <label className='font-bold '>Enter Email</label>
      <input type="email"placeholder='xyz@gmail.com' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg' required onChange={HandleSignupEmail}/>
    </div>
    <div>
    <label className='font-bold '>Mobile Number</label>
      <input type="number"placeholder='1234567890' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center font-semibold text-lg' required maxLength='10' onChange={HandleSignupMobile}/>
    </div>
    <div>
    <label className='font-bold '>Password</label>
      <input type="password"placeholder='******' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center' required onChange={HandleSignuppass}/>
    </div>
    <div>
    <label className='font-bold '>Confirm Password</label>
      <input type="password"placeholder='******' className='w-80 h-10 border-b-2 border-orange-700 focus:outline-none text-center' required onChange={HandleSignupCpassword}/>
    </div>
    <button className='bg-orange-700 w-[50%] m-auto p-2 rounded-md text-white font-semibold'>Signup</button>
    </form>
  </div>
  )
}

export default Signup