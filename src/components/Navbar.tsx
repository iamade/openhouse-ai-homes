import React from 'react';
import NavbarItem from './NavbarItem';

export default function Navbar() {
  return (
    <div className='flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4'>
        <NavbarItem title="Communities" param="fetchCommunities" />
        <NavbarItem title="Homes" param="fetchHomes" />
    </div>
  )
}