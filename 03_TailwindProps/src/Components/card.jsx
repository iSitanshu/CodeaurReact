import React from 'react'

function Card({
  username,
  btnText="Visit kro"
}){
    return (  
    <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">
      {username}</h1>
    <button class="mt-2 inline-flex cursor-pointer 
    items-center text-sm font-semibold text-white">
      {btnText} →
    </button>
  </div>

    )
}

export default Card;