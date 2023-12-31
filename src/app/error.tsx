"use client";
import React, { useEffect } from 'react'

// export default function Error() {
const Error: React.FC<{error:any, reset:any}> = (props) => {
 
    useEffect(() => {
        console.log('Error', props.error);
        
    }, [props.error]);
    return (
    <div className='flex flex-col justify-center items-center pt-10'>
        <h1 className='text-3xl mb-4'>Something went wrong</h1>
        <button onClick={() => props.reset()} className='hover:text-amber-600' >Try again</button>
    </div>
  )
}

export default Error;
