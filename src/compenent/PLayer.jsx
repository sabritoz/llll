import React, { useState } from 'react'
import Modal from './Modal.jsx'

const PLayer = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='caracter'>
        {show?<Modal el={el} setshow={setshow}/>:null}
        <img src={el.poster} onClick={()=>setshow(true)} />
    </div>
  )
}

export default PLayer