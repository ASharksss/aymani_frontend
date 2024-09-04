import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getServices = createAsyncThunk('post/getServices', async () => {
    try {
        const response = await axios.get(`/post/getServices`);
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});


const initialState = {
    services:{
        items: [],
        status: 'loading',
    }
}

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.services.items = [];
                state.services.status = 'loading';
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.services.items = action.payload;
                state.services.status = 'loaded';
            })
            .addCase(getServices.rejected, (state) => {
                state.services.items = [];
                state.services.status = 'error';
            })
    }
});

export const servicesReducer = servicesSlice.reducer;
