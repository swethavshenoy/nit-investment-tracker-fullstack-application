import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Payment(props) {
    const { handlePayment, paymentObj } = props;

    // function isFutureDate(dateString) {
    //     // Split the input into month and day parts
    //     const parts = dateString.split('/');
    //     if (parts.length !== 2) {
    //         // Invalid format, return false
    //         return false;
    //     }

    //     // Parse the month and day as integers
    //     const month = parseInt(parts[0], 10);
    //     const day = parseInt(parts[1], 10);

    //     // Create a Date object for the current date
    //     const currentDate = new Date();

    //     // Set the year of the current date to the current year
    //     const currentYear = currentDate.getFullYear();
    //     const futureDate = new Date(currentYear, month - 1, day);

    //     // Compare the future date to the current date
    //     return futureDate > currentDate;
    // }

    // const dateInput = "";
    // if (isFutureDate(dateInput)) {
    //     console.log(dateInput + " is a future date.");
    // } else {
    //     console.log(dateInput + " is a past date.");
    // }


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Name on card"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        value={paymentObj.cname}
                        onChange={(e) => handlePayment(e, 'cname')}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Card number"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                        inputProps={{ maxLength: 16 }}
                        helperText='Only numbers are allowed.'
                        value={paymentObj.cnumber}
                        onChange={(e) => handlePayment(e, 'cnumber')}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Expiry date"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                        value={paymentObj.cdate}
                        onChange={(e) => handlePayment(e, 'cdate')}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="Last three digits on signature strip"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        inputProps={{ maxLength: 3 }}
                        type='password'
                        value={paymentObj.cvv}
                        onChange={(e) => handlePayment(e, 'cvv')}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="saveCard" value="yes" />}
                        label="Remember credit card details for next time"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}