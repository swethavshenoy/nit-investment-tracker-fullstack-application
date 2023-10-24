import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import StockHolding from './components/StockHolding';
import Performance from './components/Performance';
import Wishlist from './components/Wishlist';
import { cartItem } from '../../../redux/cartSlice';
import { stockItem } from '../../../redux/stockSlice';
import { loader } from '../../../redux/loaderSlice';
import { REACT_APP_API_BASE_URL } from '../../../env';
import SnackAlert from '../../shared/SnackAlert';
import { totalQuantity } from '../../../redux/totalPurchaseSlice';
import { performanceItem } from '../../../redux/performanceSlice';
import { transactionItem } from '../../../redux/transactionSlice';
import { myprofileItem } from '../../../redux/myprofileSlice';
import { isEmpty } from 'lodash';

const retrieveWatchlist = async () => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}watchlist/`);
    return response.data;
}

const retrieveTrending = async () => {
    const response = await axios.get(`${REACT_APP_API_BASE_URL}trending/`);
    return response.data;
}

const DashboardPage = () => {

    const dispatch = useDispatch();
    const [stockData, setStockData] = useState([]);
    const [stockDataPage, setStockDataPage] = useState([]);
    const [activeToggle, setActiveToggle] = useState('prev');
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    const wishListData = useSelector((state) => state.stock);
    const performanceData = useSelector((state) => state.performance);
    const transactionData = useSelector((state) => state.transaction);
    const myprofileData = useSelector((state) => state.myprofile);

    const retrievePerformance = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}share-prices/by-email/shareprice?emailid=${userData.emailid}`);
        return response.data;
    }

    const retrieveTransaction = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}transactions/by-email/${userData.emailid}`);
        return response.data.reverse();
    }

    const retrieveMyprofile = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${userData.emailid}`);
        return response.data;
    }

    function formPerformanceData(resObj) {
        const totalQty = resObj.reduce((total, item) => total + item.quantity, 0);
        dispatch(totalQuantity(totalQty));

        const data = resObj.map(el => ({ date: el.transactionDate, value: el.amount }));
        const result = data.reduce((accumulator, current) => {
            const existingItem = accumulator.find(item => item.date === current.date);

            if (existingItem) {
                existingItem.value += current.value;
            } else {
                accumulator.push({ date: current.date, value: current.value });
            }
            return accumulator;
        }, []);
        dispatch(performanceItem(result));
    }

    const { isLoading: loaderWishlist } = useQuery("wishlist", retrieveWatchlist, {
        enabled: !wishListData || !wishListData.length,
        onSuccess: (data) => dispatch(stockItem(data)),
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    const { isLoading: loaderTrending } = useQuery("trending", retrieveTrending, {
        enabled: !stockData || !stockData.length,
        onSuccess: (data) => { setStockData(data); setStockDataPage(data.slice(0, 4)) },
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    const { isLoading: loaderPerformance } = useQuery("performance", retrievePerformance, {
        enabled: !performanceData || !performanceData.length,
        onSuccess: (data) => formPerformanceData(data),
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    const { isLoading: loaderTransaction } = useQuery("transaction", retrieveTransaction, {
        enabled: !transactionData || !transactionData.length,
        onSuccess: (data) => dispatch(transactionItem(data)),
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    const { isLoading: loaderMyprofile } = useQuery("myprofile", retrieveMyprofile, {
        enabled: isEmpty(myprofileData),
        onSuccess: (data) => dispatch(myprofileItem(data)),
        onError: (error) => { setOpenAlert(true); setAlertMsg(error.message) }
    });

    dispatch(loader(loaderTrending || loaderWishlist || loaderPerformance || loaderTransaction || loaderMyprofile));

    const handleClose = () => {
        setOpenAlert(false);
    }

    const handleToggle = (e) => {
        const data = e === 'next' ? stockData.slice(-4) : stockData.slice(0, 4);
        setActiveToggle(e);
        setStockDataPage(data);
    }

    const handleAddRemove = (e, obj) => {
        const data = wishListData.map(el => el.id === obj.id ? (e === 'add' ? { ...el, count: el.count + 1 } : { ...el, count: el.count - 1 }) : el);
        dispatch(stockItem(data));
        const cartCount = data.reduce((accumulator, object) => accumulator + object.count, 0);
        const cartData = data.filter(el => el.count > 0);
        const shareData = cartData.map(el => ({ ...el, shares: el.shares * el.count }))
        const totalShares = shareData.reduce((sum, val) => sum + val.shares, 0);
        dispatch(cartItem({ cartCount, cartData, totalShares }));
    }

    return (

        <Container>
            <SnackAlert openAlert={openAlert} handleClose={handleClose} msg={alertMsg} />
            <Typography color="#5a287d" component="h1" variant="h2" textAlign="center" fontWeight="400" sx={{ pb: 3, pt: 3 }}>
                Welcome {userData.fname} !!!
            </Typography>
            <Typography color="#646068" component="h1" variant="h4" textAlign="center" sx={{ pb: 3, pt: 3 }}>
                Trending Stocks
            </Typography>
            <StockHolding data={stockDataPage} activeToggle={activeToggle} handleToggle={handleToggle} />
            <Typography color="#646068" component="h1" variant="h4" textAlign="center" sx={{ pt: 5 }}> Investment Tracker</Typography>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <Performance data={performanceData} />
                </Grid>
                <Grid item md={4}>
                    <Wishlist data={wishListData} handleAddRemove={handleAddRemove} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default DashboardPage