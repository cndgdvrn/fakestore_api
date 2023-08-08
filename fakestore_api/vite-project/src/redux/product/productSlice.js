/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { STATUS } from "../../utils/status";

const initialState = {
  currentCategory:"",
  products: [],
  productsStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
  error: "",
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await axios.get(`https://fakestoreapi.com/products/`);
  return response.data;
});

export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (id) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  }
);

export const sortProducts = createAsyncThunk("sortProducts", async (param) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products?sort=${param}`
  );
  return response.data;
});

export const getSpecificProduct = createAsyncThunk ("getSpecificProduct",async(category)=>{
  const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
  return await response.data
})

export const getSpecificSortedProduct = createAsyncThunk("getSpecificSortedProduct",async(param,{getState})=>{
  const state = getState()
  const {currentCategory} = state.products
  const response = await axios.get(`https://fakestoreapi.com/products/category/${currentCategory}?sort=${param}`)
  return response.data
})


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateCategory : (state,action)=>{
        state.currentCategory = action.payload    
      }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
      state.productsStatus = STATUS.SUCCESS;
      state.error = "";
    });
    builder.addCase(getProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.error = "Error... While fetching product";
      state.productsStatus = STATUS.FAIL;
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.productDetailStatus = STATUS.SUCCESS;
      state.productDetail = [action.payload];
      state.error = "";
    });
    builder.addCase(getSingleProduct.pending, (state, action) => {
      state.productDetailStatus = STATUS.LOADING;
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.productDetailStatus = STATUS.FAIL;
      state.error = "Error... While fetching single product";
    });
    builder.addCase(sortProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
      state.error = "";
      state.productsStatus = STATUS.SUCCESS;
    });
    builder.addCase(sortProducts.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
      state.error = "";
    });
    builder.addCase(sortProducts.rejected,(state,action)=>{
      state.productsStatus=STATUS.FAIL
      state.error="Error... While sorting products"
    })
    builder.addCase(getSpecificProduct.fulfilled,(state,action)=>{
      state.products=[...action.payload]
      state.error = "";
      state.productsStatus = STATUS.SUCCESS;
    })
    builder.addCase(getSpecificProduct.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
      state.error = "";
    });
    builder.addCase(getSpecificProduct.rejected,(state,action)=>{
      state.productsStatus=STATUS.FAIL
      state.error="Error... While getting specific products"
    })
    builder.addCase(getSpecificSortedProduct.fulfilled,(state,action)=>{
      state.products=[...action.payload]
      state.error = "";
      state.productsStatus = STATUS.SUCCESS;
    })
    builder.addCase(getSpecificSortedProduct.pending, (state, action) => {
      state.productsStatus = STATUS.LOADING;
      state.error = "";
    });
    builder.addCase(getSpecificSortedProduct.rejected,(state,action)=>{
      state.productsStatus=STATUS.FAIL
      state.error="Error... While getting specific sorted products"
    })
  },
});

export const {updateCategory} = productSlice.actions
export default productSlice.reducer;
