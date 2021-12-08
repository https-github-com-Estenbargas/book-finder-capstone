import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";


const bookSlice = createSlice({
    name: "book",
    initialState: [],
    reducers: {
        getRandomBooks: (books, action) => {
            return action.payload
        },
        getBookDetailsByBookId: (books, action) => {
            return action.payload
        }
    },
})

export const {getRandomBooks} = bookSlice.actions
export const {getBookDetailsByBookId} = bookSlice.actions

export const fetchAllRandomBooks = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/random-books")
    dispatch(getRandomBooks(data))
}
export const fetchBookByBookId = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/:bookId")
    dispatch(getBookDetailsByBookId(data))
}
export default bookSlice.reducer