import { configureStore } from '@reduxjs/toolkit'
import { casesReducer } from "@/redux/lib/cases";
import {blogsReducer} from "@/redux/lib/blogs";
import {tagsReducer} from "@/redux/lib/tags";
import {commentReducer} from "@/redux/lib/comments";
import {servicesReducer} from "@/redux/lib/services";

export const makeStore = () => {
    return configureStore({
        reducer: {
            cases: casesReducer,
            blogs: blogsReducer,
            tags: tagsReducer,
            comment: commentReducer,
            services: servicesReducer,
        }
    })
}