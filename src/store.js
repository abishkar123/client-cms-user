import {configureStore} from '@reduxjs/toolkit';
import dashboardReducer from "./pages/dashboard/dashboardSlice"
import categoryReducer from "./pages/category/categorySlice"
import counterReducer from "./pages/addcart/countSlice"
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
        trending: dashboardReducer,
       category: categoryReducer,
       counter: persistedcounterReducer,
    }
       
});

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };