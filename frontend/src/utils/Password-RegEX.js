export const validatePassword=(pass)=>{
    const regEx=/^(?=.*\d)(?=.*[@#$*!&%])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    return regEx.test(pass);
}