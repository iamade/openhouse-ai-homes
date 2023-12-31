import { Home } from '@/models/home'
import React from 'react'


const HomeResults: React.FC<{results: Home[]}> = (props) => {
    return (
      <div>
          {props.results.map((result) => (
              <div key={result.id}>
                  {result.area}
              </div>
          ))}
      </div>
    )
  }
  
  export default HomeResults;
  