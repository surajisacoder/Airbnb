export const validateNumber=(number)=>{
    const regEx=/^[6-9]\d{9}$/;
    return regEx.test(number);
}