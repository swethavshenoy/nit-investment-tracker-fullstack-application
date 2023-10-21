import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';
import stockReducer from './redux/stockSlice';
import loaderReducer from './redux/loaderSlice';
import loginPopupReducer from './redux/loginPopupSlice';
import userDetailsReducer from './redux/userDataSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        stock: stockReducer,
        loader: loaderReducer,
        loginPopup: loginPopupReducer,
        userDetails: userDetailsReducer
    },
});

export default store;
