import React from 'react'
import { movie } from './movie'

const Rating = ({

}) => {
  return (
    <div className='flex'>
      {movie.map((data) => (
        <div key={data.id}>
          <img src={data.image} alt="" />
          <h1>{data.rating}</h1>
          <h1>{data.movieName}</h1>
          <button>{data.button1}</button>
          <button>{data.btn}</button>
        </div>
      ))}
    </div>
  )
}

export default Rating