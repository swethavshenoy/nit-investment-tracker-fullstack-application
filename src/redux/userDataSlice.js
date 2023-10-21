import { createSlice } from '@reduxjs/toolkit';

const userDataSlice = createSlice({
    name: 'userDetails',
    initialState: {},
    reducers: {
        userDetails: (state, action) => state = action.payload
    },
});

export const { userDetails } = userDataSlice.actions;

export default userDataSlice.reducer;
