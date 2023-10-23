import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { REACT_APP_API_BASE_URL } from '../../../../env';
import axios from 'axios';
import SnackAlert from '../../../shared/SnackAlert';

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        margin: 'auto',
        maxWidth: 800,
        marginTop: theme.spacing(4),
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#5a287d', // Change the primary color
        },
        secondary: {
            main: '#646068', // Change the secondary color
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif', // Change the font
    },
});

const TransactionHistory = () => {
    const classes = useStyles();

    const [transactions, setTransaction] = useState([]);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    useEffect(() => {
        getTrasactionData();
    }, []);

    async function getTrasactionData() {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}transactions/by-email/${userData.emailid}`);
        if (response) {
            setTransaction(response.data)
        } else {
            setOpenAlert(true);
            setAlertMsg("Oops..Something went wrong");
        }
    }

    const handleClose = () => {
        setOpenAlert(false);
    }

    return (
        <ThemeProvider theme={theme}>
            <SnackAlert openAlert={openAlert} handleClose={handleClose} msg={alertMsg} />
            <Container>
                <Typography variant="h4" align='center' pt={2} color='#5a287d' gutterBottom>
                    My Transactions
                </Typography>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Trasaction Date</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Company Name</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions?.length && transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>{transaction.id}</TableCell>
                                    <TableCell>{transaction.transactionDate}</TableCell>
                                    <TableCell>{transaction.description}</TableCell>
                                    <TableCell>{transaction.name}</TableCell>
                                    <TableCell>{transaction.quantity}</TableCell>
                                    <TableCell>₹{transaction.amount.toFixed(2)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ThemeProvider>
    );
};

export default TransactionHistory;
