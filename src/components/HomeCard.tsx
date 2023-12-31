
import { Home } from '@/models/home';
import React from 'react'


const HomeCard: React.FC<{result: Home }> = (props) => {
  return (
    <div>{props.result.id}</div>
  )
}

export default HomeCard;