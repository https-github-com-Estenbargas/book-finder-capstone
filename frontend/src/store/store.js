import books from "./book"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const globalReducer = combineReducers({books})

export const store = configureStore({reducer: globalReducer})