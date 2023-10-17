import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        cartItem: (state, action) => state = action.payload
        // addItem: (state, action) => {
        //     console.log(state);
        //     const itemInCart = state.find((item) => item.id === action.payload.id);
        //     console.log(itemInCart);
        //     if (itemInCart) {
        //         itemInCart.count++;
        //     } else {
        //         state.push({ ...action.payload, count: 1 });
        //     }
        // },
        // removeItem: (state, action) => {
        //     const itemInCart = state.find((item) => item.id === action.payload.id);
        //     if (itemInCart.count !== 1) {
        //         itemInCart.count--;
        //     } else {
        //         const removeItem = state.filter((item) => item.id !== action.payload.id);
        //         state = removeItem;
        //     }
        // },
    },
});

export const { cartItem } = cartSlice.actions;

export default cartSlice.reducer;
