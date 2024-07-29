import React from 'react'
import { Link } from 'react-router-dom';
import { Product } from './Product';

const ProductCart = (props) => {
    const {id,name,price,image,slug} = props.data;
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
        <Link to={slug}>
            <img src={image} alt="not displayed" className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007]' />
        </Link>
        <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
        <div className='flex justify-between items-center'></div>
    </div>
  )
}

export default ProductCart