import { configureStore } from '@reduxjs/toolkit'
import apartmentsReducer from '../features/apartment/apartmentsSlice'
const store = configureStore({
    reducer: {
        apartments: apartmentsReducer,
    },
})

export default store
