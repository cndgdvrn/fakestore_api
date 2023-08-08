import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItems = () => {
    const {cart,totalPrice,totalQuantity} = useSelector(state=>state.cart)
  return (
    <div className='mt-4'>
        {cart?.map((cartItem,i)=>{
            return <CartItem key={i} cartItem={cartItem}/>
        })}

       
        {totalPrice>0 && <p className='font-extrabold'>TOTAL PRICE = {totalPrice} TL</p>}
    </div>
  )
}

export default CartItems