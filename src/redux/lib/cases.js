import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios  from 'axios'

export const getCases = createAsyncThunk('post/getCases', async () => {
    try {
        const response = await axios.get('/post/getCases');
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

const initialState = {
    cases:{
        items: [],
        status: 'loading',
    },
}

const casesSlice = createSlice({
    name: 'cases',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCases.pending, (state) => {
                state.cases.items = [];
                state.cases.status = 'loading';
            })
            .addCase(getCases.fulfilled, (state, action) => {
                state.cases.items = action.payload;
                state.cases.status = 'loaded';
            })
            .addCase(getCases.rejected, (state) => {
                state.cases.items = [];
                state.cases.status = 'error';
            })
    }
});

export const casesReducer = casesSlice.reducer;