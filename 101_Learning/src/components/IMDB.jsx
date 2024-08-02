import React from 'react'
import Rating from './Rating'

const IMDB = ({
    text,
    below,
    className
}) => {
  return (
    <movie className={`${className}`}>
        <h1>{text}</h1>
        <h5>{below}</h5>
        <div className='flex p-3 gap-4'>
            <Rating />
        </div>
    </movie>
  )
}

export default IMDB