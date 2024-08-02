import React from 'react'

const IMDB = ({
    text,
    below,
    className
}) => {
  return (
    <movie className={`${className}`}>
        <h1>{text}</h1>
        <h5>{below}</h5>
        <div>
            
        </div>
    </movie>
  )
}

export default IMDB