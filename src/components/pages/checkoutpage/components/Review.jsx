import * as React from 'react';
import { Grid, Typography, List, Box, ListItem, ListItemText } from '@mui/material';

const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', key: 'cname' },
    { name: 'Card number', key: 'cnumber' },
    { name: 'Expiry date', key: 'cdate' },
];

export default function Review(props) {
    const { state, paymentObj } = props;

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {state?.cartData ?
                    <>
                        {state.cartData.map((product) => (
                            <Box key={product?.name} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                <img width={30} height={30} src={product.logo} alt="" />
                                <ListItem key={product?.name} sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary={product?.name} secondary={"Qty - " + product?.count} />
                                    <Typography variant="body2">{product?.shares.toFixed(2)}</Typography>
                                </ListItem>
                            </Box>
                        ))}
                    </>
                    :
                    <ListItem key={state.title} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={state?.subheader} secondary={state?.description.join(' ')} />
                        <Typography variant="body2">{state?.price}</Typography>
                    </ListItem>

                }
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ₹{state.price || state.totalShares.toFixed(2)}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Customer Details
                    </Typography>
                    <Typography gutterBottom>{userData.fname + ' ' + userData.lname}</Typography>
                    <Typography gutterBottom>{userData.address}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.key}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail || paymentObj[payment.key]}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}