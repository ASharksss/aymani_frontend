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

const initialState = {
    ABlogs:{
        items: [],
        status: 'loading',
    },
}

const casesSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.cases.items = [];
                state.cases.status = 'loading';
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.cases.items = action.payload;
                state.cases.status = 'loaded';
            })
            .addCase(getPosts.rejected, (state) => {
                state.cases.items = [];
                state.cases.status = 'error';
            })
    }
});

export const casesReducer = casesSlice.reducer;