import books from "./book"
import users from "./user"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const globalReducer = combineReducers({books, users})

export const store = configureStore({reducer: globalReducer})