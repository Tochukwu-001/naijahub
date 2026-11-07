"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";

const Ideas = () => {
    const [ideas, setIdeas] = useState<any[]>([]);

    const handleFetch = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "business_ideas"));
            const loadedIdeas: any[] = [];

            querySnapshot.forEach((doc) => {
                const data = { id: doc.id, ...doc.data() };
                loadedIdeas.push(data);
            });

            setIdeas(loadedIdeas);
            
            // Display the array containing id and data in the console
            console.log("Fetched Business Ideas Array:", loadedIdeas);

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
            {/* Nothing displayed on the page as requested */}
        </div>    
    );
};    

export default Ideas;