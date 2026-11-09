"use client"
import React, { useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import  {db } from '@/config/firebase';

const Ideas = () => {
const [arr,setArr] = usestate ([])

    const handleFetch = async ()=>{
        try {
            const dbArray = []
            const querySnapshot = await getDocs(collection( db, "business_ideas"));
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            const data = {id:doc.id, ...doc.data()}
        });
        
        } catch (error) {
            console.error("Error>>>>",error)   
            alert("An error occurred!")
        }
    }

    useEffect(()=>{handleFetch()}, [])

  return (
    <div>
      
    </div>
  )
}

export default Ideas
