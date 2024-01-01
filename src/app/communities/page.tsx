import CommunityResults from "@/components/CommunityResults";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { Community } from "@/models/community";
import { Home } from "@/models/home";
import { CombinedCommunity } from "@/models/combinedcommunity";



export default async function Communities() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
  const COMMUNITY_FULL_URL = `${API_BASE_URL}/communities.json`;
  const FULL_URL = `${API_BASE_URL}/homes.json`;

  const communityResponse = await fetch(COMMUNITY_FULL_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  
  const homeResponse = await fetch(FULL_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });


  if (!communityResponse.ok || !homeResponse.ok ) {
    throw new Error("Failed to fetch data");
  }
 

  const communityData: Community[] = await communityResponse.json();
  const homeData: Home[] = await homeResponse.json();

  if(!communityData || !homeData) {
    return <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else this may be on us or check your internet{" "}
        <Link href="/" className="text-blue-400">Home</Link>
        </p>
    </div>
  }

          //Combine data
        const combinedData: CombinedCommunity[] = communityData.map((community) => {
          const homesInCommunity = homeData.filter((home) => home.communityId === community.id);
          const averagePrice = homesInCommunity.length > 0 ? homesInCommunity.reduce((acc, home) => acc + home.price, 0) / homesInCommunity.length : 0;

            return {
            ...community,
            averagePrice,
          };
         
        });
        

        const sortedCombinedData = combinedData.sort((a,b) => a.name.localeCompare(b.name));
        


  return (
   
    <div>
      <CommunityResults results={sortedCombinedData}   />
    </div>
  );
}
