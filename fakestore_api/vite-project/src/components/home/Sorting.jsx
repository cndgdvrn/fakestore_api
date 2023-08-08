import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecificSortedProduct, sortProducts } from '../../redux/product/productSlice'

const Sorting = () => {

  const dispatch = useDispatch()
  const {products} = useSelector(state=>state.products)

  const handleChange = (e)=>{
    dispatch(getSpecificSortedProduct(e.target.value))
  }


  return (
    <div className='mt-8 p-4 flex justify-end items-center'>
        <select onChange={(e)=>handleChange(e)} className='font-gemunu p-2'>
            <option disabled >Seçiniz</option>
            <option value="asc" >Artan</option>
            <option value="desc" >Azalan</option>
        </select>
    </div>
  )
}

export default Sorting