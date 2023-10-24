import { createSlice } from '@reduxjs/toolkit';

const performanceSlice = createSlice({
    name: 'performance',
    initialState: [],
    reducers: {
        performanceItem: (state, action) => state = action.payload
    }
});

export const { performanceItem } = performanceSlice.actions;

export default performanceSlice.reducer;
