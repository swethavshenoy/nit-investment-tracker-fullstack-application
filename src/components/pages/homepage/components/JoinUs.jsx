import React from 'react'
import { Typography, Container, Button, Grid } from '@mui/material';
import pic1 from '../../../../images/pic1.jpg';
import { isEmpty } from 'lodash';

const JoinUs = () => {
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    return (
        <Container>
            <Grid container spacing={5}>
                <Grid item md={6} xs color="#5a287d" sx={{ mt: 1 }}>
                    {<h1>No fuss, free sign up! <br /> No credit card needed!</h1>}
                    <Typography color="#646068" paragraph>
                        Create wealth for you and your family’s future goals with NIT. 100% Guaranteed returns.
                        The only way to see true performance is to see it in context. Sign up for free without any commitment.
                    </Typography>
                    {isEmpty(userData) && <Button className='box' variant="contained" sx={{ pt: 1 }}>Signup for free</Button>}
                </Grid>
                <Grid item xs md={6}>
                    <img src={pic1} alt='Pic1' className="img-fluid" />
                </Grid>
            </Grid>
        </Container >
    )
}

export default JoinUs