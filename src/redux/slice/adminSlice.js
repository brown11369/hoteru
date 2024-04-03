import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: "admin",
    initialState: {
        adminInfo: {
            _id: "123456789",
            userName: "demo",
            email: "demo@email.com",
            accessToken: null
        }
    },
    reducers: {
        addAdminInfo: (state, action) => {
            state.adminInfo = action?.payload
        },
        addAccessToken: (state, action) => {
            state.adminInfo.accessToken = action?.payload
        },
        removeAccessToken: (state) => {
            state.adminInfo.accessToken = "123456789"
        }
    }
})

export const { addAdminInfo, addAccessToken, removeAccessToken } = adminSlice.actions;

export default adminSlice.reducer;