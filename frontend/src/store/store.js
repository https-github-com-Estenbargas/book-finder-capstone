import books from "./book"
import users from "./user"
import auth from "./auth"
import userBooks from "./userBook"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const globalReducer = combineReducers({books, auth, users, userBooks})

export const store = configureStore({reducer: globalReducer})