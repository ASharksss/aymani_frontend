import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const createComment = createAsyncThunk('post/createComment', async (data) => {
    try {
        const response = await axios.post('/post/createComment', data);
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

export const getComments = createAsyncThunk('post/getComments', async (id) => {
    try {
        const response = await axios.get(`/post/getComments/${id}`);
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

const initialState = {
    comments:{
        items: [],
        status: 'loading',
    }
}

const commentSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getComments.pending, (state) => {
                state.comments.items = [];
                state.comments.status = 'loading';
            })
            .addCase(getComments.fulfilled, (state, action) => {
                state.comments.items = action.payload;
                state.comments.status = 'loaded';
            })
            .addCase(getComments.rejected, (state) => {
                state.comments.items = [];
                state.comments.status = 'error';
            })
    }
});

export const commentReducer = commentSlice.reducer;
