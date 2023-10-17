import { createSlice } from '@reduxjs/toolkit';
// import { stockWishlistData } from '../constants/config';

const stockSlice = createSlice({
    name: 'stock',
    initialState: [],
    reducers: {
        stockItem: (state, action) => state = action.payload
    },
});

export const { stockItem } = stockSlice.actions;

export default stockSlice.reducer;
