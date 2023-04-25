

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use local storage as the storage engine
import rootReducer from './reducers'; // Import your root reducer

// Define the configuration object for Redux Persist
const persistConfig = {
  key: 'root', // Key for the persisted data
  storage, // Storage engine to use (e.g., local storage)
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer
const store = createStore(persistedReducer);

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };
