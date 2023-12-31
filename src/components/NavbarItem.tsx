"use client";
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React from 'react'


const NavbarItem: React.FC<{title: string, param: any}> = (props) => {
    const searchParams = useSearchParams();
    const group = searchParams.get("group");
    const pathname = usePathname();
    
  return (
   
    <div>
  
       <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            pathname &&
            pathname === props.param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
       href={props.param}>
    
        {props.title}
        </Link>
    </div>
  )
}

export default NavbarItem;