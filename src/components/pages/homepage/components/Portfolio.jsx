import React from 'react'
import { Typography, Container, Box, Stack, Button } from '@mui/material';
import graph from '../../../../images/graph.jpg';
import { isEmpty } from 'lodash';
import { useDispatch } from 'react-redux';
import { loginPopup } from '../../../../redux/loginPopupSlice';

const Portfolio = () => {
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    const dispatch = useDispatch();

    const handleSignup = () => {
        dispatch(loginPopup('signup'));
    }

    return (
        <main className='hero'>
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                    background: 'radial-gradient(circle at 50% 50%, rgb(255, 214, 102), rgb(254, 173, 129), rgb(246, 167, 162), rgb(147, 156, 235)) 0% 0% / 400% 100%;'
                }}
            >
                <Container align="center" maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h3"
                        align="center"
                        color="#5a287d"
                        gutterBottom
                    >
                        Be the smarter investor
                    </Typography>
                    <Typography variant="h5" align="center" color="#646068" paragraph>
                        Powerful portfolio tracking software that lets you check your investments in one place with award-winning performance, dividend tracking and tax reporting.
                    </Typography>
                    <Stack
                        sx={{ pt: 1 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        {isEmpty(userData) && <Button variant="contained" sx={{ pt: 1 }} color="primary" onClick={handleSignup}>Signup for free</Button>}
                    </Stack>
                    <img sx={{ pt: 1 }} className="img-fluid" src={graph} alt='portfolio graph' />
                </Container>
            </Box>
        </main>
    )
}

export default Portfolio