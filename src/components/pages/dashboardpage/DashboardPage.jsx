import React, { useState, useEffect } from 'react'
import { Container, Typography, Grid } from '@mui/material';
import { stockHoldingData, stockWishlistData } from '../../../constants/config';
import StockHolding from './components/StockHolding';
import Performance from './components/Performance';
import Wishlist from './components/Wishlist';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const DashboardPage = (props) => {
    const [stockData, setStockData] = useState(stockHoldingData.slice(0, 4));
    const [activeToggle, setActiveToggle] = useState('prev');
    const [wishListData, setWishListData] = useState(stockWishlistData);
    const [openAlert, setOpenAlert] = useState(false);

    useEffect(() => {
        props.func({});
    }, []);

    const handleToggle = (e) => {
        const data = e === 'next' ? stockHoldingData.slice(-4) : stockHoldingData.slice(0, 4);
        setActiveToggle(e);
        setStockData(data);
    }

    const handleAddRemove = (e, obj) => {
        const data = wishListData.map(el => el.id === obj.id ? (e === 'add' ? { ...el, count: el.count + 1 } : { ...el, count: el.count - 1 }) : el);
        setWishListData(data);
        const cartCount = data.reduce((accumulator, object) => accumulator + object.count, 0);
        if (cartCount >= 5) {
            setOpenAlert(true);
        } else {
            setOpenAlert(false);
        }
        const cartData = data.filter(el => el.count > 0);
        const shareData = cartData.map(el => ({ ...el, shares: el.shares * el.count }))
        const totalShares = shareData.reduce((sum, val) => sum + val.shares, 0);
        props.func({ cartCount, cartData, totalShares });
    }

    const handleClose = () => {
        setOpenAlert(false);
    }

    return (
        <Container>
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning"
                    sx={{ width: '100%' }}>
                    You have reached max quantity, please upgrade your membership
                </Alert>
            </Snackbar>
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