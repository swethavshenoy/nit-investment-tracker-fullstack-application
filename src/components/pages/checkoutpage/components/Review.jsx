import * as React from 'react';
import { Grid, Typography, List, Box, ListItem, ListItemText } from '@mui/material';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type', detail: 'Visa' },
    { name: 'Card holder', detail: 'Mr John Smith' },
    { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date', detail: '04/2024' },
];

export default function Review(props) {
    const { state } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {state?.cartData ?
                    <>
                        {state.cartData.map((product) => (
                            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
                    <Typography gutterBottom>John Smith</Typography>
                    <Typography gutterBottom>{addresses.join(', ')}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.name}</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>{payment.detail}</Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}