import React from 'react';
import { Container, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

    const transactions = [
        { id: 1, date: '2023-10-01', description: 'Purchase A', name: 'Apple INC', Quantity: '4', amount: 100 },
        { id: 2, date: '2023-10-05', description: 'Purchase B', name: 'Apple INC', Quantity: '4', amount: 50 },
        { id: 3, date: '2023-10-10', description: 'Purchase C', name: 'Apple INC', Quantity: '4', amount: 75 },
    ];

    return (
        <ThemeProvider theme={theme}>
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
                            {transactions.map((transaction) => (
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
