import {configureStore, combineReducers} from "@reduxjs/toolkit"

import todoSlice from "./slices/todo.js"

const rootReducer = combineReducers({
    todo:todoSlice
})

const store = configureStore({
    reducer:rootReducer
})

export {store}