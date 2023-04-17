import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    trendingProducts:[],
}

const trendingProudctSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        settrendingProduct:(state, {payload = []})=>{
            state.trendingProducts = payload;  
            
        }
    }
})

const {reducer, actions}=  trendingProudctSlice;
export const {settrendingProduct} = actions
export default reducer;