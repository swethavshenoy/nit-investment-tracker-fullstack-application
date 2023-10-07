import React from 'react';
import { Typography, Container, Button, Grid } from '@mui/material';

const BannerX = (props) => {
    const { data } = props;
    return (
        <Container sx={{ pt: 5, pb: 5 }}>
            <Grid container alignItems='center' spacing={5}>
                <Grid item xs md={7}>
                    <img src={data.image} alt='portfolio' className="img-fluid" />
                </Grid>
                <Grid item md={5} xs color="#5a287d" sx={{ mt: 1 }}>
                    <Typography color="#646068" component="h1" variant="h4">
                        {data.title}
                    </Typography>
                    <Typography color="#646068" paragraph sx={{ pt: 5, pb: 5 }}>
                        {data.description}
                    </Typography>
                    {data.btnText && <Button className='box' variant="contained" sx={{ pt: 1 }}>{data.btnText}</Button>}
                </Grid>
            </Grid>
        </Container>)
}

export default BannerX