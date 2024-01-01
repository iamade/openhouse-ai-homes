"use client";
import { CombinedCommunity } from "@/models/combinedcommunity";
import { Community } from "@/models/community";
import Image from "next/image";
import React, { useState } from "react";

const CommunityCard: React.FC<{ result: CombinedCommunity }> = (props) => {
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

 


  return (
    // <div className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
    <div
      className="cursor-pointer p-2 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border sm:border-slate-400 m-5
    transition-shadow duration-200 group"
    >
   
      <Image
        src={imageLoadError ? 'openhouselogo.svg' : props.result.imgUrl || 'openhouselogo.svg'}
        alt="image is not available"
        width={500}
        height={300}
        className="w-full h-auto rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        placeholder="blur"
        blurDataURL="/spinner.svg"
        onError={handleImageError}
      ></Image>
      <div className=" mt-5 mb-0 ">
        <div className="flex items-center">
          <label className="mr-2 text-sm">Community:</label>
        <h2 className="text-sm font-bold">{props.result.name}</h2>
        </div>
        <div className="flex items-center">
          <label className="mr-2 text-sm">Group:</label>
        <h2 className="text-sm font-bold">{props.result.group}</h2>
        </div>
        <div className="flex  items-center">
        <label className="mr-2 text-sm">Avg Price: </label>
            <p>${props.result.averagePrice.toFixed(2)}</p>
            
        </div>
      
        </div>
    
    </div>
    // </div>
  );
};

export default CommunityCard;
