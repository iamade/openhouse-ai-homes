import { Community } from '@/models/community';
import React from 'react';
import CommunityCard from './CommunityCard';

const CommunityResults: React.FC<{results: Community[]}> = (props) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {props.results.map((result) => (
          <CommunityCard  key={result.id} result={result}/>
            // <div key={result.id}>
            //     {result.name}
            // </div>
        ))}
    </div>
  )
}

export default CommunityResults;