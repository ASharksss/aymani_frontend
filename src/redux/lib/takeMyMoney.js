import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const takeMyMoneyReq = createAsyncThunk('post/createLead', async (data) => {
    try {
        const response = await axios.post('/post/createLead',  data, );
        return response.data; // Возвращаем данные из ответа
    } catch (error) {
        throw error.response.data; // Если есть ошибка, выбрасываем её для обработки в Redux
    }
});