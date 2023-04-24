import{createSlice} from '@reduxjs/toolkit'


const initialState ={
    cart: [],
}
const cartCountSlice = createSlice({
    name:"cartcounter",
    initialState,
    reducers:{

        addcart:(state,{payload=[]})=>{
            state.cart = {...state.cart, payload}
        }
        

    }
})

const { reducer, actions}= cartCountSlice
export const { addcart} = actions
export default reducer