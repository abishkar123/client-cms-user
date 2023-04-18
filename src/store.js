import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./pages/dashboard/dashboardSlice"
import categoryReducer from "./pages/category/categorySlice"
import counterReducer from "./pages/addcart/countSlice"
const store = configureStore({
    reducer:{
        trending: dashboardReducer,
        category: categoryReducer,
        counter: counterReducer,
    }
})
export default store;
