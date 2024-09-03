import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const getPosts = createAsyncThunk('post/getAllPosts', async () => {
    try {
        const response = await axios.get('/post/getAllPosts');
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

export const getByTag = createAsyncThunk('post/getByTagPosts', async (id) => {
    try {
        const response = await axios.get(`/post/getByTagPosts`, {
            params: {
                tagId: id
            }
        }  );
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

export const getOnePost = createAsyncThunk('post/getPost', async (id) => {
    try {
        const response = await axios.get(`/post/getPost/${id}`,  );
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});



const initialState = {
    ABlogs:{
        items: [],
        status: 'loading',
    },
    OBlog:{
        items: [],
        status: 'loading'
    }
}

const casesSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.ABlogs.items = [];
                state.ABlogs.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.ABlogs.items = action.payload;
                state.ABlogs.status = 'loaded';
            })
            .addCase(getPosts.rejected, (state) => {
                state.ABlogs.items = [];
                state.ABlogs.status = 'error';
            })
            .addCase(getByTag.pending, (state) => {
                state.ABlogs.items = [];
                state.ABlogs.status = 'loading';
            })
            .addCase(getByTag.fulfilled, (state, action) => {
                state.ABlogs.items = action.payload;
                state.ABlogs.status = 'loaded';
            })
            .addCase(getByTag.rejected, (state) => {
                state.ABlogs.items = [];
                state.ABlogs.status = 'error';
            })
            .addCase(getOnePost.pending, (state) => {
                state.OBlog.items = [];
                state.OBlog.status = 'loading';
            })
            .addCase(getOnePost.fulfilled, (state, action) => {
                state.OBlog.items = action.payload;
                state.OBlog.status = 'loaded';
            })
            .addCase(getOnePost.rejected, (state) => {
                state.OBlog.items = [];
                state.OBlog.status = 'error';
            })
    }
});

export const blogsReducer = casesSlice.reducer;