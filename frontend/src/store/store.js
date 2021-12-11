import books from "./book"
import users from "./user"
import auth from "./auth"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const globalReducer = combineReducers({books, auth, users})

export const store = configureStore({reducer: globalReducer})