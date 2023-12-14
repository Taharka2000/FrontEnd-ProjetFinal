import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function LesGp() {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/get")
        .then(result=>setUsers(result.data))
        .catch(err=>console.log(err))
    })
  return (
    <>
    {
        users.map((user)=>{
            <div >
            <div>
         
            </div>
            <div className='bg-gray-300  pnl'>
                <div className='flex pt-[10px] justify-between'>
            <h2 className='pl-2'>{user.name}</h2>
            <button className='bg-green-400 rounded-lg w-[30%] mr-[10px]  p-[12px]'>Availble</button>
                </div>
            <div className='flex  justify-between pt-[20px]'>
         
            <h3 className='mr-[10px]'>{user.name}</h3>
            </div>
            </div>
        </div>
        })
    }
   
    </>
  )
}
