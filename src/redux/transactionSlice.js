import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
    name: 'transaction',
    initialState: [],
    reducers: {
        transactionItem: (state, action) => state = action.payload
    }
});

export const { transactionItem } = transactionSlice.actions;

export default transactionSlice.reducer;
