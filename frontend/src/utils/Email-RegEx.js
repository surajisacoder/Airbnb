export const validateEmail=(email)=>{
    const regEx=/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    return regEx.test(email);
}