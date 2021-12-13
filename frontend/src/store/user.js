import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";
import {fetchAuth} from "./auth";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        getAllUsers: (users, action) => {
            return action.payload
        },
        getUserByUserId: (users, action) => {
            return action.payload
        }
    },
})

export const {getAllUsers} = userSlice.actions
export const {getUserByUserId} = userSlice.actions

export const fetchAllUsers = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/user")
    dispatch(getAllUsers(data))
}
export const fetchUserByUserId = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/user/${auth.userId}`)
        console.log(data)
        dispatch(getUserByUserId(data))
    }
}

export default userSlice.reducer