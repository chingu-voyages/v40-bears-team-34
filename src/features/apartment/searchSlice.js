import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    searchResults: [],
    error: '',
}

const BASE_URL = import.meta.env.VITE_BASE_URL

export const searchApartments = createAsyncThunk(
    'apartments/searchResults',
    async (query) => {
        const {
            data: { data },
        } = await axios.get(`${BASE_URL}/apartments?${query}`)
        return data
    }
)

const apartmentsSearchSlice = createSlice({
    name: 'searchResults',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchApartments.pending, (state) => {
            state.loading = true
        })
        builder.addCase(searchApartments.fulfilled, (state, action) => {
            state.loading = false
            state.searchResults = action.payload
        })
        builder.addCase(searchApartments.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
            state.searchResults = []
        })
    },
})

export default apartmentsSearchSlice.reducer
