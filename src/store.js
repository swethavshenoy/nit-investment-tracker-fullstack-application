import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';
import stockReducer from './redux/stockSlice';
import performanceReducer from './redux/performanceSlice';
import loaderReducer from './redux/loaderSlice';
import transactionReducer from './redux/transactionSlice';
import myprofileReducer from './redux/myprofileSlice';
import loginPopupReducer from './redux/loginPopupSlice';
import totalPurchaseSlice from './redux/totalPurchaseSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        stock: stockReducer,
        loader: loaderReducer,
        loginPopup: loginPopupReducer,
        totalQuantity: totalPurchaseSlice,
        performance: performanceReducer,
        transaction: transactionReducer,
        myprofile: myprofileReducer
    },
});

export default store;
