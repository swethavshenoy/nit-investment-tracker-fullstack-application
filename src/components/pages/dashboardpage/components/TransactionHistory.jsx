import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, TextField, IconButton, Container, Typography, TableSortLabel } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { transactionTableHeader } from '../../../../constants/config';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { REACT_APP_API_BASE_URL } from '../../../../env';
import { loader } from '../../../../redux/loaderSlice';
import { useQuery } from 'react-query';
import { transactionItem } from '../../../../redux/transactionSlice';

const TransactionHistory = () => {
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    const dispatch = useDispatch();
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const transactionData = useSelector((state) => state.transaction);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = [...transactionData].sort((a, b) => {
        if (sortConfig.key) {
            const valueA = a[sortConfig.key];
            const valueB = b[sortConfig.key];

            return typeof valueA === 'string' && typeof valueB === 'string'
                ? sortConfig.direction === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
                : sortConfig.direction === 'asc' ? valueA - valueB : valueB - valueA;
        }

        return 0;
    });

    const filteredData = sortedData.filter((item) =>
        filter === '' || item.name.toLowerCase().includes(filter.toLowerCase())
    );

    const retrieveTransaction = async () => {
        const response = await axios.get(`${REACT_APP_API_BASE_URL}transactions/by-email/${userData.emailid}`);
        return response.data.reverse();
    }

    const { isLoading: loaderTransaction } = useQuery("transaction", retrieveTransaction, {
        enabled: !transactionData || !transactionData.length,
        onSuccess: (data) => dispatch(transactionItem(data))
    });

    dispatch(loader(loaderTransaction));

    return (
        <>
            <Container align='center'>
                <Typography variant="h4" align='center' pt={5} pb={3} color='#5a287d' gutterBottom>
                    My Transactions
                </Typography>

                <TextField label="Filter by Name" value={filter} sx={{ width: 500, pb: 5 }} onChange={(e) => setFilter(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={() => setFilter('')}>
                                <SearchIcon />
                            </IconButton>
                        ),
                    }}
                />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead style={{ backgroundColor: "rgb(254, 173, 129)" }}>
                            <TableRow style={{ cursor: 'pointer' }}>
                                {transactionTableHeader.map(el =>
                                    <TableCell style={{ color: '#5a287d' }} key={el.key} onClick={() => handleSort(el.key)}>{el.value}
                                        <TableSortLabel active={sortConfig.key === el.key} direction={sortConfig.key === el.key ? sortConfig.direction : 'asc'}>
                                        </TableSortLabel>
                                    </TableCell>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData?.length ? filteredData.map((obj) =>
                                <TableRow key={obj.id}>
                                    {transactionTableHeader.map(el =>
                                        <TableCell style={{ color: '#5a287d' }} key={el.key}>{el.key === 'amount' ? `₹${obj.amount.toFixed(2)}` : el.key === 'transactionDate' ? new Date(obj.transactionDate).toLocaleDateString('en-GB') : obj[el.key]}</TableCell>
                                    )}
                                </TableRow>
                            ) : <Typography variant="h6" align='center' pt={2} pb={2} color='#5a287d' gutterBottom>No Record Found!!!</Typography>}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
};

export default TransactionHistory;
