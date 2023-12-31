import { Community } from "@/models/community";
import Image from "next/image";
import React from "react";

const CommunityCard: React.FC<{ result: Community }> = (props) => {
  // const Card = ({className, data, title, img}: Props) => {
  return (
    <div
      className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2
    transition-shadow duration-200 group"
    >
      <Image
        src={props.result.imgUrl || 'openhouselogo.svg'}
        alt="image is not available"
        width={500}
        height={300}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        placeholder="blur"
        blurDataURL="/spinner.svg"
      ></Image>
      <div className="p-2 py-4">
        <div className="flex items-center">
          <label className="mx-3">Name:</label>
        <h2 className="truncate text-lg font-bold">{props.result.name}</h2>
        </div>
        <div className="flex  items-center">
        <label className="mx-3">Group: </label>
            <p className="line-clamp-2 text-md">{props.result.group}</p>
            
        </div>
      
        </div>
      {/* {props.result.id} */}
    </div>
  );
};

export default CommunityCard;
