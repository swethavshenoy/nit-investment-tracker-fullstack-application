import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import StockHolding from './components/StockHolding';
import Performance from './components/Performance';
import Wishlist from './components/Wishlist';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { cartItem } from '../../../redux/cartSlice'
import { stockItem } from '../../../redux/stockSlice'
import { loader } from '../../../redux/loaderSlice'
import { REACT_APP_API_BASE_URL } from '../../../env';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
    const [performance, setPerformance] = useState([]);

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    useEffect(() => {
        getPerformanceData();
    }, []);

    async function getPerformanceData() {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}share-prices/shareprice`);
        if (response) {
            const data = response.data.map(el => ({ date: el.transactionDate, value: el.amount }));
            const result = data.reduce((accumulator, current) => {
                const existingItem = accumulator.find(item => item.date === current.date);

                if (existingItem) {
                    existingItem.value += current.value;
                } else {
                    accumulator.push({ date: current.date, value: current.value });
                }

                return accumulator;
            }, []);
            setPerformance(result)
        } else {
            alert('something went wrong');
        }
    }

    const { isLoading } = useQuery("wishlist", retrieveWatchlist, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        onSuccess: (data) => dispatch(stockItem(data)),
        onError: (error) => snackAlert(error.message)
    });

    const { isLoadingTreding } = useQuery("trending", retrieveTrending, {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: false,
        onSuccess: (data) => { setStockData(data); setStockDataPage(data.slice(0, 4)) },
        onError: (error) => snackAlert(error.message)
    });

    dispatch(loader(isLoading));

    const wishListData = useSelector((state) => state.stock);

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
        if (cartCount >= 5) {
            setOpenAlert(true);
        } else {
            setOpenAlert(false);
        }
        const cartData = data.filter(el => el.count > 0);
        const shareData = cartData.map(el => ({ ...el, shares: el.shares * el.count }))
        const totalShares = shareData.reduce((sum, val) => sum + val.shares, 0);
        dispatch(cartItem({ cartCount, cartData, totalShares }));
    }

    const snackAlert = (msg) => {
        return (
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning"
                    sx={{ width: '100%' }}>
                    {msg}
                </Alert>
            </Snackbar>
        )
    }

    return (
        <Container>
            {snackAlert("You have reached max quantity, please upgrade your membership")}
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
                    <Performance data={performance} />
                </Grid>
                <Grid item md={4}>
                    <Wishlist data={wishListData} handleAddRemove={handleAddRemove} />
                </Grid>

            </Grid>
        </Container >
    )
}

export default DashboardPage