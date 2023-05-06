import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user:[],
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        setuser:(state, {payload = []})=>{
            state.user = payload;  
            
        }
    }
})

const {reducer, actions}=  userSlice;
export const {setuser} = actions
export default reducer;