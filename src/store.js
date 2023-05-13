import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./pages/dashboard/dashboardSlice"
import categoryReducer from "./pages/category/categorySlice"
import counterReducer from "./pages/addcart/countSlice"
import paymentReducer from "./pages/checkout/CheckOutSlice"
import orderReducer from "./pages/order/OrderSlice"
import authReducer from './pages/login/LoginSlice'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or whatever storage engine you want to use



// Define the persist config for each reducer


const counterPersistConfig = {
    key: "counter",
    storage: storage,
    // ... other options if needed
};

// Wrap each reducer with persistReducer
const persistedcounterReducer = persistReducer(counterPersistConfig,counterReducer);

// Configure the Redux store
const store = configureStore({
    reducer: {
        user: authReducer,
        trending: dashboardReducer,
       category: categoryReducer,
       counter: persistedcounterReducer,
       payments: paymentReducer,
       orderlist:orderReducer,
    }
       
});

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };