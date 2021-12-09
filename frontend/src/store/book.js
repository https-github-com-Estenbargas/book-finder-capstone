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
        }
    },
})

export const {getAllBooks} = bookSlice.actions
export const {getBookDetailsByBookId} = bookSlice.actions

export const fetchAllBooks = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/books/")
    dispatch(getAllBooks(data))
    console.log(data)
}
export const fetchBookByBookId = (bookId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/books/book-detail/${bookId}`)
    console.log(data)
  await dispatch(getBookDetailsByBookId(data))
}
export default bookSlice.reducer