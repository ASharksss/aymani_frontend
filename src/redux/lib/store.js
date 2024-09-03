import { configureStore } from '@reduxjs/toolkit'
import { casesReducer } from "@/redux/lib/cases";
import {blogsReducer} from "@/redux/lib/blogs";
import {tagsReducer} from "@/redux/lib/tags";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cases: casesReducer,
            blogs: blogsReducer,
            tags: tagsReducer,
        }
    })
}