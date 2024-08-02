import React from 'react'



const Dabba = ({
    items = [],
    text,
    className
}) => {
  return (
    <>
    <div className={`bg-black    p-4 ${className}`}>
        <h1 className='text-white'>{text}</h1>
        <div className='flex flex-wrap'>
            {items.map((item)=>(
                <div key={item.id} className='flex flex-col items-center m-2'>
                    <img src={item.src} className='h-20'alt="" />
                    <h1 className='text-white'>{item.text}</h1>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default Dabba