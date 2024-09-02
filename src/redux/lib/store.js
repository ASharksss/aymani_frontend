import { configureStore } from '@reduxjs/toolkit'
import { casesReducer } from "@/redux/lib/cases";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cases: casesReducer
        }
    })
}