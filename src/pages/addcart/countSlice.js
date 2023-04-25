import{createSlice} from '@reduxjs/toolkit'


const initialState ={
    cart: [],
}
const cartProductSlice = createSlice({
    name:"cartproduct",
    initialState,
    reducers:{

        addcart:(state,{payload=[]})=>{

           const temArg = state.cart.filter((item)=> (item._id !== payload._id))
            state.cart =[...temArg, payload]
        }
        

    }
})

const { reducer, actions}= cartProductSlice
export const { addcart} = actions
export default reducer