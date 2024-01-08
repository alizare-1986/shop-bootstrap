import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState={
    products:[],
    loading:false,
    error:null
}
const productsSlice=createSlice({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder.addCase(fetchAPi.pending,state=>{
        state.loading=true
    })
    builder.addCase(fetchAPi.fulfilled,(state,action)=>{
        state.loading=false,
        state.products=action.payload
    })
    builder.addCase(fetchAPi.rejected,(state,action)=>{
        state.loading=false,
        state.products=[],
        state.error=action.error.message

    })
    }
})
const fetchAPi = createAsyncThunk(
    'products/fetchAPI',
    async()=>{
     
       
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data
     
    
    }
  )
  export default productsSlice.reducer


export {fetchAPi}