import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getCases = createAsyncThunk('post/getCases', async () => {
    try {
        const response = await axios.get('/post/getCases');
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

export const getOneCase = createAsyncThunk('post/getCase', async (id) => {
    try {
        const response = await axios.get(`/post/getCase/${id}`);
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});

const initialState = {
    cases: {
        items: [],
        status: 'loading',
    },
    oneCase: {
        items: [],
        result: {
            "desktop_version": null,
            "mobile_version": null
        },
        status: 'loading',
    }
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
            .addCase(getOneCase.pending, (state) => {
                state.oneCase.items = [];
                state.oneCase.result = {
                    "desktop_version": null,
                    "mobile_version": null
                }
                state.oneCase.status = 'loading';
            })
            .addCase(getOneCase.fulfilled, (state, action) => {
                state.oneCase.status = 'loaded';
                action.payload.case_blocks.map(item => {
                    if (item.type_block === "Результат") {
                        state.oneCase.result = {
                            "desktop_version": item.desktop_version,
                            "mobile_version": item.mobile_version
                        }
                    } else {
                        state.oneCase.result = {
                            "desktop_version": null,
                            "mobile_version": null
                        }
                    }
                })
                let updatedData = {
                    ...action.payload,
                    case_blocks: action.payload.case_blocks.filter((block) => block.type_block !== "Результат"),
                }
                state.oneCase.items = updatedData;
            })
            .addCase(getOneCase.rejected, (state) => {
                state.oneCase.items = [];
                state.oneCase.result = {
                    "desktop_version": null,
                    "mobile_version": null
                }
                state.oneCase.status = 'error';
            })
    }
});

export const casesReducer = casesSlice.reducer;