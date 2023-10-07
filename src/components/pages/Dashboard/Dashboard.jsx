import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const investments = [
    {
        id: 1,
        name: 'Apple Inc. (AAPL)',
        quantity: 50,
        pricePerShare: 150,
    },
    {
        id: 2,
        name: 'Microsoft Corporation (MSFT)',
        quantity: 30,
        pricePerShare: 300,
    },
    {
        id: 3,
        name: 'Amazon.com Inc. (AMZN)',
        quantity: 10,
        pricePerShare: 3500,
    },
];

const transactions = [
    {
        id: 1,
        type: 'Buy',
        investment: 'Apple Inc. (AAPL)',
        quantity: 10,
        pricePerShare: 150,
        totalCost: 1500,
    },
    {
        id: 2,
        type: 'Sell',
        investment: 'Microsoft Corporation (MSFT)',
        quantity: 15,
        pricePerShare: 310,
        totalCost: 4650,
    },
    {
        id: 3,
        type: 'Buy',
        investment: 'Amazon.com Inc. (AMZN)',
        quantity: 5,
        pricePerShare: 3500,
        totalCost: 17500,
    },
];

const Dashboard = () => {
    return (
        <Container>
            <Typography variant="h4" mt={4} mb={2}>
                Portfolio Summary
            </Typography>
            <Paper elevation={3} p={3}>
                <Typography variant="h6">Total Portfolio Value</Typography>
                <Typography variant="h5">$100,000</Typography>
            </Paper>

            <Typography variant="h4" mt={4} mb={2}>
                Individual Investments
            </Typography>
            <Grid container spacing={3}>
                {investments.map((investment) => (
                    <Grid item key={investment.id} xs={12} sm={6} md={4}>
                        <Paper elevation={3} p={3}>
                            <Typography variant="h6">{investment.name}</Typography>
                            <Typography variant="subtitle1">
                                Quantity: {investment.quantity}
                            </Typography>
                            <Typography variant="subtitle1">
                                Price per Share: ${investment.pricePerShare}
                            </Typography>
                            <Typography variant="subtitle1">
                                Total Value: ${investment.quantity * investment.pricePerShare}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" mt={4} mb={2}>
                Investment Performance
            </Typography>
            {/* Add charts and performance metrics here */}

            <Typography variant="h4" mt={4} mb={2}>
                Transaction History
            </Typography>
            <Grid container spacing={3}>
                {transactions.map((transaction) => (
                    <Grid item key={transaction.id} xs={12} sm={6} md={4}>
                        <Paper elevation={3} p={3}>
                            <Typography variant="h6">{transaction.type}</Typography>
                            <Typography variant="subtitle1">
                                Investment: {transaction.investment}
                            </Typography>
                            <Typography variant="subtitle1">
                                Quantity: {transaction.quantity}
                            </Typography>
                            <Typography variant="subtitle1">
                                Price per Share: ${transaction.pricePerShare}
                            </Typography>
                            <Typography variant="subtitle1">
                                Total Cost: ${transaction.totalCost}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>

            <Button variant="contained" color="primary" mt={4}>
                Add Investment
            </Button>
        </Container>
    );
};

export default Dashboard;