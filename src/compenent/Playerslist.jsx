import React from 'react'
import Player from './PLayer.jsx'

const PlayersList = ({players}) => {
  return (
    <div className='caracterlist'>
      {players.map(el=><Player el={el}/>)}
    </div>
  )
}

export default PlayersList