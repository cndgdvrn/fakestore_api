import React from 'react'
import { useDispatch } from 'react-redux';
import { decrease, increase, remove } from '../../redux/cart/cartSlice';

const CartItem = ({cartItem}) => {
    const dispatch = useDispatch()
 
  

  return (
    <div className='inline-flex items-center space-x-24 brdr w-2/5 m-2 p-2'>
        <img className='w-28 h-28' src={cartItem.image}/>
        <div className='flex flex-col justify-center items-center space-y-4'>
            <div>
                 <div className='addToCart' onClick={() => dispatch(increase(cartItem))}>+</div>
                 <div className='addToCart' onClick={() => dispatch(remove(cartItem))}>Sepetten Çıkar</div>
                 <div className='addToCart' onClick={() => dispatch(decrease(cartItem))}>-</div>
            </div>
            <p>Bu üründen sepetinizde <span className='font-extrabold'>{cartItem.quantity}</span> adet vardır</p>
            <p>{cartItem.quantity} x {cartItem.price} = {(cartItem.quantity*cartItem.price).toFixed(1)} TL </p>
        </div>

    </div>
  )
}

export default CartItem