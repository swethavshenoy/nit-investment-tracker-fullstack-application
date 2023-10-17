import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
// import { stockHoldingData } from '../../../constants/config';
import StockHolding from './components/StockHolding';
import Performance from './components/Performance';
import Wishlist from './components/Wishlist';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { cartItem } from '../../../redux/cartSlice'
import { stockItem } from '../../../redux/stockSlice'
import { loader } from '../../../redux/loaderSlice'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const retrieveWatchlist = async () => {
    const response = await axios.get("http://localhost:9973/watchlist/");
    return response.data;
}

const retrieveTrending = async () => {
    const response = await axios.get("http://localhost:9973/trending/");
    return response.data;
}

const DashboardPage = () => {

    const dispatch = useDispatch();
    const [stockData, setStockData] = useState([]);
    const [activeToggle, setActiveToggle] = useState('prev');
    const [openAlert, setOpenAlert] = useState(false);

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
        onSuccess: (data) => setStockData(data),
        onError: (error) => snackAlert(error.message)
    });

    dispatch(loader(isLoading));

    const wishListData = useSelector((state) => state.stock);

    const handleClose = () => {
        setOpenAlert(false);
    }

    const handleToggle = (e) => {
        console.log(stockData);
        const data = e === 'next' ? stockData.slice(-4) : stockData.slice(0, 4);
        setActiveToggle(e);
        setStockData(data);
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
            <Typography color="#5a287d" component="h1" variant="h2" textAlign="center" fontWeight="400" sx={{ pb: 3, pt: 3 }}>Welcome Swetha!!</Typography>
            <Typography color="#646068" component="h1" variant="h4" textAlign="center" sx={{ pb: 3, pt: 3 }}>
                Trending Stocks
            </Typography>
            <StockHolding data={stockData} activeToggle={activeToggle} handleToggle={handleToggle} />
            <Typography color="#646068" component="h1" variant="h4" textAlign="center" sx={{ pt: 5 }}> Investment Performance</Typography>
            <Grid container spacing={3}>
                <Grid item md={8}>
                    <Performance />
                </Grid>
                <Grid item md={4}>
                    <Wishlist data={wishListData} handleAddRemove={handleAddRemove} />
                </Grid>

            </Grid>
        </Container >
    )
}

export default DashboardPage