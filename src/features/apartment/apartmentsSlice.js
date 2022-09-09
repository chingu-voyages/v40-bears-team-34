import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    apartments: [],
    error: '',
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export const fetchApartments = createAsyncThunk(
    'apartments/fetchApartments',
    async () => {
        const {
            data: { data },
        } = await axios.get(`${BASE_URL}/apartments`)
        return data
    }
)

const apartmentsSlice = createSlice({
    name: 'apartments',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApartments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchApartments.fulfilled, (state, action) => {
            state.loading = false
            state.apartments = action.payload
            state.error = ''
        })
        builder.addCase(fetchApartments.rejected, (state, action) => {
            state.loading = false
            state.apartments = []
            state.error = action.error.message
        })
    },
})

export default apartmentsSlice.reducer
