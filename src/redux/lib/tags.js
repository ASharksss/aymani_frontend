import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const getTags = createAsyncThunk('post/getTags', async () => {
    try {
        const response = await axios.get('/post/getTags');
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

const initialState = {
    tags:{
        items: [],
        status: 'loading',
    },
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTags.pending, (state) => {
                state.tags.items = [];
                state.tags.status = 'loading';
            })
            .addCase(getTags.fulfilled, (state, action) => {
                state.tags.items = action.payload;
                state.tags.status = 'loaded';
            })
            .addCase(getTags.rejected, (state) => {
                state.tags.items = [];
                state.tags.status = 'error';
            })
    }
});

export const tagsReducer = tagsSlice.reducer;