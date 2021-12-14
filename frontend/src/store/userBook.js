import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {fetchAuth} from "./auth";


const userSlice = createSlice({
        name: "userBook",
        initialState: [],
        reducers: {
            getUserBookByUserId: (userBooks, action) => {
                return action.payload
            },
        }
})


export const {getUserBookByUserId} = userSlice.actions



export const fetchUserBookByUserId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/user-book/books/${auth.userId}`)
        dispatch(getUserBookByUserId(data))
        console.log(data)
    }
}



export default userSlice.reducer