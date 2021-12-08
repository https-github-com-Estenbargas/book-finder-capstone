import {createSlice} from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        getAllUsers: (users, action) => {
            return action.payload
        },
    },
})

export const {getAllUsers} = userSlice.actions

export const fetchAllUsers = () => async (dispatch) => {
    const {data} = await httpConfig.get("/apis/user")
    dispatch(getAllUsers(data))
}

export default userSlice.reducer