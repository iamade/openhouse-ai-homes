"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'


const NavbarItem: React.FC<{title: string, param: any}> = (props) => {
    const searchParams = useSearchParams();
    const group = searchParams.get("group");
    
  return (
   
    <div>
         {/* this group is : {group} */}
       {/* <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            group &&
            group === props.param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
     
      href={`/?group=${props.param}`}>
        {props.title}
        </Link> */}
       <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            group &&
            group === props.param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
       href={props.param}>
    
        {props.title}
        </Link>
    </div>
  )
}

export default NavbarItem;