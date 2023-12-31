import { Home } from '@/models/home'
import React from 'react'
import HomeCard from './HomeCard';


const HomeResults: React.FC<{results: Home[]}> = (props) => {
    return (
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
          {props.results.map((result) => (
             <HomeCard  key={result.id} result={result}/>
            //   <div key={result.id}>
            //       {result.area}
            //   </div>
          ))}
      </div>
    )
  }
  
  export default HomeResults;
  