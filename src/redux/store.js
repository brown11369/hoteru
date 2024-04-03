import {configureStore} from "@reduxjs/toolkit"
import adminSlice from "./slice/adminSlice";

const store=configureStore({
    reducer:{
        "admin":adminSlice
    }
})

export default store;