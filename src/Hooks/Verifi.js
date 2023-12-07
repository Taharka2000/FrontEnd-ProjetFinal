import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
export const Useverification=()=>{
    const [error,setError]=useState(null);
    const [isloading,setIsLoading]=useState(null);
    const {dispatch}=useAuthContext()
    const verification=async(email,firstname,lastname,pays)=>{
        setIsLoading(true)
        setError(null)
        const response=await fetch('http://localhost:4000/verification',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,firstname,lastname,pays})
        })
        const json=await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
             }
             if(response.ok){
                dispatch({type:'SEND',payload:json})
                setIsLoading(false)
            }
    }
    return{verification,isloading,error}
}