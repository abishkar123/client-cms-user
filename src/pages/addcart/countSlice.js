import{createSlice} from '@reduxjs/toolkit'
const initialState ={
    cart: 0,
}
const cartCountSlice = createSlice({
    name:"cartcounter",
    initialState,
    reducers:{
        increment:(state) =>{
            state.cart++
        },
        decrement:(state) =>{
            state.cart--
        },

        reset:(state)=>{
            state.cart = 0
        }

    }
})

const { reducer, actions}= cartCountSlice
export const { increment, decrement, reset} = actions
export default reducer