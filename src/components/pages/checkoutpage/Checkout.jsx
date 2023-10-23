import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Payment from './components/Payment';
import Review from './components/Review';
import { useLocation } from 'react-router-dom';
import { cartItem } from '../../../redux/cartSlice'

import { REACT_APP_API_BASE_URL } from '../../../env';
import axios from 'axios';
import SnackAlert from '../../shared/SnackAlert';

const steps = ['Payment details', 'Review your purchase'];

function getStepContent(step, state, handlePayment, paymentObj) {
    switch (step) {
        case 0:
            return <Payment handlePayment={handlePayment} paymentObj={paymentObj} />;
        case 1:
            return <Review state={state} paymentObj={paymentObj} />;
        default:
            throw new Error('Unknown step');
    }
}

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);

    const [paymentObj, setPaymentObj] = useState({});
    const [purchaseId, setPurchaseId] = useState();

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    const { state } = useLocation();
    const dispatch = useDispatch();

    async function handleSaveStock(data) {
        const response = await axios.post(`http://localhost:9975/transactions/add`, data[0]);
        if (response) {
            dispatch(cartItem({}));
            setOpenAlert(true);
            setAlertSeverity('success');
            setAlertMsg(`Transaction Successfull`);
        } else {
            setOpenAlert(true);
            setAlertMsg("Oops..Something went wrong");
        }
    }


    async function handleSaveProfile(data) {
        try {
            const response = await axios.put(`http://localhost:9972/user-auth/update-user`, data);
            if (response.status === 202) {
                localStorage.setItem('userDetails', JSON.stringify(data));
                setOpenAlert(true);
                setAlertSeverity('success');
                setAlertMsg(`You are now a ${data.title} member!!`);
            } else {
                setOpenAlert(true);
                setAlertMsg("Oops..Something went wrong");
            }
        } catch (error) {
            setOpenAlert(true);
            setAlertMsg("Oops..Something went wrong");
        }
    }

    function formStockObj(state, id) {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 10);

        const data = state.cartData.map(element => ({
            "id": id,
            "emailid": userData.emailid,
            "transactionDate": formattedDate,
            "description": "Purchase",
            "name": element.name,
            "quantity": element.count,
            "amount": element.shares
        }));

        handleSaveStock(data);
    }

    const handleClose = () => {
        setOpenAlert(false);
    }

    async function getProfileData() {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}user-auth/user/${userData.emailid}`);
        if (response) {
            const data = { ...response.data, usertype: state.title };
            handleSaveProfile(data);
        } else {
            setOpenAlert(true);
            setAlertMsg("Oops..Something went wrong");
        }
    }

    const handleNext = () => {
        if (activeStep === 1) {
            const id = Math.floor(Math.random() * 1000) + 1;
            setPurchaseId(id);
            if (state.cartData?.length) {
                formStockObj(state, id);
            } else {
                getProfileData(id);
            }

        }
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handlePayment = (e, key) => {
        setPaymentObj(state => ({ ...state, [key]: e.target.value }))
    }

    return (
        <>
            <SnackAlert openAlert={openAlert} handleClose={handleClose} msg={alertMsg} severity={alertSeverity} />
            <CssBaseline />
            <AppBar
                position="absolute"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ₹{t.palette.divider}`,
                }}
            >
            </AppBar>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Payment Successful,
                                Thank you for your purchase.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your purchase number is {purchaseId}. We have emailed your purchase
                                confirmation.
                            </Typography>
                        </>
                    ) : (
                        <>
                            {getStepContent(activeStep, state, handlePayment, paymentObj)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Make Payment' : 'Next'}
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </Container>
        </>
    );
}