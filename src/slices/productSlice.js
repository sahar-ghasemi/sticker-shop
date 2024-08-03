import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items:[],
    status:null
}

export const fetchProducts=createAsyncThunk('products/fetch', async () => {
    try{
        const response=await axios.get("http://localhoat:9000/stickers");
        return response.data;
    }catch(err){
console.log(err);
    }
})

const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:{
        [fetchProducts.pending]:(state)=>{
            state.status="pending";
        },
        [fetchProducts.fulfilled]:(state,action)=>{
            state.status="success",
            state.items=action.payload;
        },
        [fetchProducts.rejected]:(state)=>{
            state.status="rejected"
        }
    }
})

export default productsSlice.reducer;