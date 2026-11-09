"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

const Ideas = () => {
    const [loadedIdeas, setLoadedIdeas] = useState([]);

    const handleFetch = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "business_ideas"));
            const loadedIdeas= [];

            querySnapshot.forEach((doc) => {
                const data = { id: doc.id, ...doc.data() };
                loadedIdeas.push(data);
            });
            

           
          

        } catch (error) {
            console.error("Error>>>>", error);   
            alert("An error occurred!");
        }
    };

    useEffect(() => { 
        handleFetch(); 
    }, []);

    return (
        <div>

        </div>    
    );
};    

export default Ideas;