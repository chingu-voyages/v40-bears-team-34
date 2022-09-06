import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    apartment: {},
    error: '',
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchApartment = createAsyncThunk(
    'apartments/fetchApartment',
    async (id) => {
        const {
            data: { data },
        } = await axios.get(`${BASE_URL}/apartments/${id}`)
        return data
    }
)

const apartmentSlice = createSlice({
    name: 'apartment',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApartment.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchApartment.fulfilled, (state,action) => {
          state.loading = false;
          state.apartment = action.payload;
          state.error = ''
          
        })
        builder.addCase(fetchApartment.rejected, (state,action) => {
          state.loading = false;
          state.apartment = {}
          state.error = action.error.message
        })
    },
})

export default apartmentSlice.reducer;
