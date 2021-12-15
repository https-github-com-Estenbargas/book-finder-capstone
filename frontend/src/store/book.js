import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";


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
        getUserBooks: (books, action) => {
            return action.payload
        },
        getRandomBooks: (books, action) => {
            return action.payload
        }
    },
})

export const {getAllBooks} = bookSlice.actions
export const {getBookDetailsByBookId} = bookSlice.actions
export const {getUserBooks} = bookSlice.actions
export const {getRandomBooks} = bookSlice.actions

export const {getAllBooksByBookGenre} = bookSlice.actions
export const fetchAllBooks = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/")
    dispatch(getAllBooks(data))
    console.log(data)
}
export const fetchAllBooksByGenre = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/genre/")
    dispatch(getAllBooksByBookGenre(data))
}
export const fetchAllRandomBooks = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/random-books")
    dispatch(getRandomBooks(data))
}
export const fetchBookByBookId = (bookId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/books/book-detail/${bookId}`)
    console.log(data)
  await dispatch(getBookDetailsByBookId(data))
}
export const fetchUserBooks = (userBookBookId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/user-book/${userBookBookId}`)
    dispatch(getUserBooks(data))
}
export default bookSlice.reducer