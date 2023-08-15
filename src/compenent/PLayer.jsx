import React from 'react'

const Player = ({el}) => {
  return (
    <div className='card'>
      <img src={el.image} alt="" />
      <h1>{el.name}</h1>
      <h3>{el.nationality}</h3>
    </div>
  )
}

export default Player