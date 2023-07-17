import { createSlice } from "@reduxjs/toolkit"

const stateCurrentOrder = localStorage.getItem('order') ? JSON.parse(localStorage.getItem("order")) : {}


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