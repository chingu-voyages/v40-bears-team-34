import { configureStore } from '@reduxjs/toolkit'
import apartmentReducer from '../features/apartment/apartmentSlice'
import apartmentsReducer from '../features/apartment/apartmentsSlice'
import searchResultsReducer from '../features/apartment/searchSlice'

const store = configureStore({
    reducer: {
        apartments: apartmentsReducer,
        apartment: apartmentReducer,
        searchResults: searchResultsReducer,
    },
})

export default store
