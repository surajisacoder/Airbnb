import axios from "axios";
import Cookies from 'js-cookie';

export const UserLogin=async(num,pass)=>{

    try{ 
        const {data:{data}}=await axios.post("http://localhost:8090/api/login",{
            number:num,
            password:pass
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
}