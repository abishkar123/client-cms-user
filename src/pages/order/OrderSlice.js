import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    order:[],
}

const OrderSlice = createSlice({
    name: "orderlist",
    initialState,
    reducers:{
        setorderlist:(state, {payload = []})=>{
            state.order = payload;  
            
        }
    }
})

const {reducer, actions}= OrderSlice;
export const {setorderlist} = actions
export default reducer;