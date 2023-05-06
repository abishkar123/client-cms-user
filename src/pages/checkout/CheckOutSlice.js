import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    paymentMethods:[],
}

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers:{
        setpaymentMethods:(state, {payload = []})=>{
            state.paymentMethods = payload;  
            
        }
    }
})

const {reducer, actions}= paymentSlice ;
export const {setpaymentMethods} = actions
export default reducer;