export const validateName=(name)=>{
    const regEx=/^[a-z]+$/i
    return regEx.test(name);
}