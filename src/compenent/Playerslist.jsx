import React from 'react'
import Player from './PLayer'
const Playerslist = ({playerslist}) => {
  return (
    <div className='container'>
      {playerslist.map(el=><Player el={el}/>)}
    </div>
  )
}

export default Playerslist