import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./pages/dashboard/dashboardSlice"
const store = configureStore({
    reducer:{
        trending: dashboardReducer,
    }
})
export default store;
