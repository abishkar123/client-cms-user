import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./pages/dashboard/dashboardSlice"
import categoryReducer from "./pages/category/categorySlice"
const store = configureStore({
    reducer:{
        trending: dashboardReducer,
        category: categoryReducer,
    }
})
export default store;
