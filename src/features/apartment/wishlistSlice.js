import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    wishlist: localStorage.getItem('wishlist')
        ? JSON.parse(localStorage.getItem('wishlist'))
        : [],
}

const wishlistSlice = createSlice({
    name: 'wishlisted',
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlist = [...state.wishlist, action.payload]
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter(
                (apartment) => apartment._id !== action.payload
            )
            localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
        },
    },
})

export default wishlistSlice.reducer
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions
