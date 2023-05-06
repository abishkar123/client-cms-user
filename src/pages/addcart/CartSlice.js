import{createSlice} from '@reduxjs/toolkit'


const initialState ={
    item: [],
    
}
const itemcartSlice = createSlice({
    name:"item",
    initialState,
    reducers:{

        setAddtoCart:(state,{payload=[]})=>{

           const temArg = state.cart.filter((item)=> (item._id !== payload._id))
            state.cart =[...temArg, payload]
        }
        

    }
})

const { reducer, actions}= cartProductSlice
export const { addcart} = actions
export default reducer