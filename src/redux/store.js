import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./state/user";

export const GentlemanStore = configureStore({
    reducer: {
        user: userSlice.reducer,
    }
})
