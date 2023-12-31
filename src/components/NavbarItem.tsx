"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'


const NavbarItem: React.FC<{title: string, param: any}> = (props) => {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div>
       <Link
          className={`m-4 hover:text-amber-600 font-semibold p-2 ${
            genre &&
            genre === props.param &&
            "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
          }`}
       href={`/?genre=${props.param}`}>
        {props.title}
        </Link>
    </div>
  )
}

export default NavbarItem;