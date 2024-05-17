import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";





export const getProduct=createAsyncThunk(
    "products/getProducts",
    async () =>{
        return await axios.get("/Belalea")
    }

)


const productSlice = createSlice({
    name: 'products',
    initialState:{
        products:null,
        isLoading : false,   
        error:"" ,
        
    },

    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state)=> {
            state.isLoading =true;
        })
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading =false;
            state.products = action.payload?.data;
            
        })
        builder.addCase(getProduct.rejected,(state,action)=>{
            state.isLoading =false;
            state.error = action.payload;
        });
    }
})

export default productSlice.reducer