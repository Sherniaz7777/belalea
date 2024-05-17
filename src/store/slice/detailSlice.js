import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";







export const getDetail = createAsyncThunk("detaill/getDetail", 
async (id) =>{
   return await axios.get(`/Belalea/${id}`)
})

const detailSlice=createSlice({
    name:"detaill",
    initialState:{
        detailData:null,
        isLoading:false,
        error:"",
    },

    extraReducers:(builder)=>{
       builder.addCase(getDetail.pending,(state)=> {
           state.isLoading=true;
    })
      builder.addCase(getDetail.fulfilled ,(state,action)=>{
          state.isLoading=false;
          state.detailData= action.payload.data;
      })
      builder.addCase(getDetail.rejected ,(state , action )=>{
        state.error=action.payload;
        state.isLoading=false;
      });
}})


export default detailSlice.reducer