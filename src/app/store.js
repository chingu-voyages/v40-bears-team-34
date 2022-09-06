import { configureStore } from '@reduxjs/toolkit'
import apartmentReducer from '../features/apartment/apartmentSlice'
import apartmentsReducer from '../features/apartment/apartmentsSlice'
const store = configureStore({
    reducer: {
        apartments: apartmentsReducer,
        apartment: apartmentReducer,
    },
})

export default store
