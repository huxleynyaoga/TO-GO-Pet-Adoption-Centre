import { useState } from "react";
interface FormValues{
    [key:string]: string | number ;
}
const useForm=(initalValues:FormValues)=>{
const[values,setValues]=useState(initalValues);
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [name]: value }));
  };

const resetForm=()=>setValues(initalValues);
return{
    values,
    handleChange,
    resetForm
}
}
export default useForm