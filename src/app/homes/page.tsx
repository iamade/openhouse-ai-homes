import HomeResults from '@/components/HomeResults';
import React from 'react'

export default async function Homes() {
 
    const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
    const FULL_URL = `${API_BASE_URL}/homes.json`;
    const response = await fetch(FULL_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
  
    const homeData = await response.json();
  
    //   console.log('cdata', communityData);
  
    return (
      <div>
        <HomeResults results={homeData} />
      </div>
    );

}
