import { Community } from '@/models/community';
import React from 'react'

const CommunityResults: React.FC<{results: Community[]}> = (props) => {
  return (
    <div>
        {props.results.map((result) => (
            <div key={result.id}>
                {result.name}
            </div>
        ))}
    </div>
  )
}

export default CommunityResults;