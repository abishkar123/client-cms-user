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
        },
        setRemoveFromCard: (state, { payload }) => {
            // remove the product with the given id from the cart
            const updatedCart = state.cart.filter(item => item?._id !== payload);
            state.cart = updatedCart;
        },
        setUpdateCart: (state, { payload }) => {
            const { id, name, value } = payload;
            const itemIndex = state.cart.findIndex((item) => item._id === id);
            if (itemIndex !== -1) {
                state.cart[itemIndex][name] = value;
            }
        },
 
 

    
        

    }
})

const { reducer, actions}= cartProductSlice
export const { addcart, setRemoveFromCard, setUpdateCart} = actions
export default reducer