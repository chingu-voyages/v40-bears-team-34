import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist: [],
}

const wishlistSlice = createSlice({
    name: 'wishlisted',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist = [...state.wishlist, action.payload]
        },
        removeFromWishlist: (state, action) => {
            console.log('removing from wishlist')
            state.wishlist = state.wishlist.filter(
                (apartment) => apartment.name !== action.payload
            )
        },
    },
})

export default wishlistSlice.reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
