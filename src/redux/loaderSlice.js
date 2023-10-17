import { createSlice } from '@reduxjs/toolkit';

const loaderSlice = createSlice({
    name: 'loader',
    initialState: false,
    reducers: {
        loader: (state, action) => state = action.payload
    },
});

export const { loader } = loaderSlice.actions;

export default loaderSlice.reducer;
