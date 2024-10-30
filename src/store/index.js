import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import todoSlice from "./slices/todo.js"

const rootReducer = combineReducers({
    todo: todoSlice
})

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["todo"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
    reducer: persistedReducer
})

const persistor = persistStore(store);

export { store, persistor }