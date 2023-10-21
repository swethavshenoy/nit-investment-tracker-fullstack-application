import { createSlice } from '@reduxjs/toolkit';

const loginPopupSlice = createSlice({
    name: 'loginPopup',
    initialState: false,
    reducers: {
        loginPopup: (state, action) => state = action.payload
    },
});

export const { loginPopup } = loginPopupSlice.actions;

export default loginPopupSlice.reducer;
