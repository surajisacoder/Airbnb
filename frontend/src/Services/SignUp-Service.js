import axios from "axios"
import Cookies from 'js-cookie';

export const UserSignUP=async(name,email,num,pass,cpass)=>{
  try{
    const {data:{data}}= await axios.post("http://localhost:8090/api/signup",{
        username:name,email:email,password:pass,cpassword:cpass,mobileno:num
    })
       const {token,_id}=data;
       console.log(token,_id);
    
       Cookies.set('token', token, { expires: 7 }); 
       Cookies.set('id', _id, { expires: 7 }); 
       return {token,_id};
  }
  catch(err){
    console.log(err)
  }
  return false
}