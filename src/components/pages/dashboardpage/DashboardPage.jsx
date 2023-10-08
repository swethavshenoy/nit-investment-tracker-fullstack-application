import React, { useState } from 'react'
import { Container, Typography, Grid } from '@mui/material';
import { stockHoldingData, stockWishlistData } from '../../../constants/config';
import StockHolding from './components/StockHolding';
import Performance from './components/Performance';
import Wishlist from './components/Wishlist';

const DashboardPage = () => {

    const [stockData, setStockData] = useState(stockHoldingData.slice(0, 4));
    const [activeToggle, setActiveToggle] = useState('prev');
    const [wishListData, setWishListData] = useState(stockWishlistData);

    const handleToggle = (e) => {
        const data = e === 'next' ? stockHoldingData.slice(-4) : stockHoldingData.slice(0, 4);
        setActiveToggle(e);
        setStockData(data);
    }

    const handleAddRemove = (e, id) => {
        const data = wishListData.map(el => el.id === id ? (e === 'add' ? { ...el, ['count']: el.count + 1 } : { ...el, ['count']: el.count - 1 }) : el);
        setWishListData(data);
    }

    return (
        <Container>
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
        </Container>
    )
}

export default DashboardPage