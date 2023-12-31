import CommunityResults from "@/components/CommunityResults";
import Link from "next/link";
import React from "react";

export default async function Communities() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL as string;
  const FULL_URL = `${API_BASE_URL}/communities.json`;
  const response = await fetch(FULL_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const communityData = await response.json();


  //   console.log('cdata', communityData);
  if(!communityData) {
    return <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">Try searching for something else this may be on us or check your internet{" "}
        <Link href="/" className="text-blue-400">Home</Link>
        </p>
    </div>
  }

  return (
    <div>
      <CommunityResults results={communityData} />
    </div>
  );
}
