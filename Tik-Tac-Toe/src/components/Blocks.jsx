import React from 'react'
import "./Blocks.css"

const Blocks = (props) => {
  return (
    <div className='block'>
        {/* //jaha pe decide hoga ki cross hoga ya circle */}
         {props.value}
    </div>
  )
}

export default Blocks;