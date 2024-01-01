import { Community } from '@/models/community';
import React from 'react';
import CommunityCard from './CommunityCard';
import { CombinedCommunity } from '@/models/combinedcommunity';
import { Home } from '@/models/home';

const CommunityResults: React.FC<{results: CombinedCommunity[]}> = (props) => {

return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {props.results.map((result) => (
          <CommunityCard  key={result.id} result={result}/>
          
        ))}
    </div>
  )
}

export default CommunityResults;