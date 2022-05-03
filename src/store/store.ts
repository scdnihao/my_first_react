import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menuSlice";


export const store =configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
    reducer:{
        menu:menuSlice
    },
})