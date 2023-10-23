import React from 'react'
import { Typography, Container, Button, Grid } from '@mui/material';
import { isEmpty } from 'lodash';

const Banner = (props) => {
    const { data } = props;
    const userData = JSON.parse(localStorage.getItem('userDetails'));
    return (
        <Container sx={{ pt: 5, pb: 4 }}>
            <Grid container alignItems="center" spacing={5}>
                <Grid item md={4} xs color="#5a287d" sx={{ mt: 1 }}>
                    <Typography color="#646068" component="h1" variant="h4">
                        {data.title}
                    </Typography>
                    <Typography color="#646068" paragraph sx={{ pt: 5, pb: 5 }}>
                        {data.description}
                    </Typography>
                    {data.btnText && isEmpty(userData) && <Button className='box' variant="contained" sx={{ pt: 1 }}>{data.btnText}</Button>}
                </Grid>
                <Grid item xs md={8}>
                    <img src={data.image} alt='portfolio' className="img-fluid" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Banner