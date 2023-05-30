import { createSlice } from "@reduxjs/toolkit"

const stateCurrentOrder = JSON.parse(localStorage.getItem("order"))
console.log(stateCurrentOrder)
const initialState = {
  order: [],
  currentOrder: stateCurrentOrder,
}

const OrderSlice = createSlice({
  name: "orderlist",

  initialState,
  reducers: {
    setorderlist: (state, { payload = [] }) => {
      state.order = payload
    },
    currentOrderHandler: (state, { payload }) => {
      localStorage.setItem("order", JSON.stringify(payload))
      state.currentOrder = payload
    },
  },
})

const { reducer, actions } = OrderSlice
export const { setorderlist, 
   currentOrderHandler
 } = actions
export default reducer