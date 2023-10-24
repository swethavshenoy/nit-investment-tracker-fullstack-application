import { createSlice } from '@reduxjs/toolkit';

const myprofileSlice = createSlice({
    name: 'myprofile',
    initialState: [],
    reducers: {
        myprofileItem: (state, action) => state = action.payload
    }
});

export const { myprofileItem } = myprofileSlice.actions;

export default myprofileSlice.reducer;
