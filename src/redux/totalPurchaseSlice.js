import { createSlice } from '@reduxjs/toolkit';

const totalPurchaseSlice = createSlice({
    name: 'totalQuantity',
    initialState: 0,
    reducers: {
        totalQuantity: (state, action) => state = action.payload
    },
});

export const { totalQuantity } = totalPurchaseSlice.actions;

export default totalPurchaseSlice.reducer;
