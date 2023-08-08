import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: [],
  loading: false,
  error: "",
};

export const getCategories = createAsyncThunk("category", async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories')
    return response.data
});

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled,(state,action)=>{
        state.categories = [...action.payload]
        state.loading = false
    });
    builder.addCase(getCategories.pending,(state,action)=>{
        state.loading=true
    })
  },
});



export default categorySlice.reducer
