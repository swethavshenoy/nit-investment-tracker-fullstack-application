import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';
import stockReducer from './redux/stockSlice';
import loaderReducer from './redux/loaderSlice';


const store = configureStore({
    reducer: {
        cart: cartReducer,
        stock: stockReducer,
        loader: loaderReducer
    },
});

export default store;
