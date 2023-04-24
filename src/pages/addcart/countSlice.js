import{createSlice} from '@reduxjs/toolkit'


const initialState ={
    cart: [],
}
const cartProductSlice = createSlice({
    name:"cartproduct",
    initialState,
    reducers:{

        addcart:(state,{payload=[]})=>{
            state.cart = {...state.cart, payload}
        }
        

    }
})

const { reducer, actions}= cartProductSlice
export const { addcart} = actions
export default reducer