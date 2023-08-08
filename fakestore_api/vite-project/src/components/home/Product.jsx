/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({product}) => {
  return (
    <div className='p-4 relative'>
        <p className='bg-black text-white inline-flex items-center absolute top-1 right-1 p-2 rounded-2xl text-2xl z-10'>{product.price} <span className='text-sm ml-1'> TL</span> </p>
        <img className='w-[320px] h-[280px] object-cover  hover:scale-105 duration-700 overflow-hidden mb-4' src={product.image} />
        <Link to={`product/${product.id}`} className='bg-candreva-red text-white p-2 rounded-full' >Detaylı İncele</Link>
    </div>
  )
}

export default Product