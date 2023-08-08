import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './category/categorySlice'
import productSlice from './product/productSlice'
import cartSlice from './cart/cartSlice'

export const store = configureStore({
  reducer: {
    categories : categorySlice,
    products: productSlice,
    cart:cartSlice
  },
})