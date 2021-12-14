import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {act} from "react-dom/test-utils";
import {fetchUserBookByUserId} from "./userBook";
import {fetchAuth} from "./auth";


const bookSlice = createSlice({
    name: "book",
    initialState: [],
    reducers: {
        getAllBooks: (books, action) => {
            return action.payload
        },
        getBookDetailsByBookId: (books, action) => {
            return [action.payload]
        },
        getAllBooksByBookGenre: (books, action) => {
            return action.payload
    },
        getBooksByUserBookBookId : (books, action) => {
            return action.payload
        }
},})

export const {getAllBooks} = bookSlice.actions
export const {getBookDetailsByBookId} = bookSlice.actions
export const {getAllBooksByBookGenre} = bookSlice.actions
export const {getBooksByUserBookBookId} = bookSlice.actions
export const fetchAllBooks = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/")
    dispatch(getAllBooks(data))
}
export const fetchAllBooksByGenre = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/genre/")
    dispatch(getAllBooksByBookGenre(data))
}
export const fetchBooksByUserBookBookId = () => async (dispatch, getState) =>{
    await dispatch(fetchUserBookByUserId())
    const state = getState()
    console.log(state)
        const {data} = await httpConfig.get(`/apis/books/user-book`)
        dispatch(getBooksByUserBookBookId(data))

}
export const fetchBookByBookId = (bookId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/books/book-detail/${bookId}`)
    console.log(bookId)
  await dispatch(getBookDetailsByBookId(data))
}

export default bookSlice.reducer