import React from 'react'
import { Rating, Typography, Container, Grid, Box } from '@mui/material';

const Review = (props) => {
    const { reviewData } = props
    return (
        <>
            <Container align="center" sx={{ pt: 2, pb: 2 }}>
                <Typography component="h1" variant="h3" align="center" color="#5a287d" gutterBottom>
                    Don't just take our word for it
                </Typography>
                <Typography align="center" color="#646068" paragraph>
                    Over 300,000+ investors track their investments with Sharesight. Here’s what a few of them have to say:
                </Typography>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    pt: 2, pb: 2
                }}>
                    <Typography color="#646068" component="h1" variant="h5">
                        Excellent
                    </Typography>
                    <Rating sx={{ ml: 2 }} name="text-feedback" value={4} readOnly precision={0.5} />
                </Box>
                <Typography align="center" color="#646068" paragraph>
                    Rated 4.4 / 5 based on 362 reviews on Google
                </Typography>
            </Container>
            <Container sx={{ pb: 3 }}>

                <Container maxWidth="md" component="main">
                    <Typography color="#646068" sx={{ pb: 2 }} component="h1" variant="h6">
                        <u>Showing our favorite reviews</u>
                    </Typography>
                    <Grid container spacing={5} alignItems="flex-end">
                        {reviewData.map((data, index) => (
                            <Grid item md={3} key={index}>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',

                                }}>
                                    <Rating sx={{ mr: 2 }} name="text-feedback" value={data.rating} readOnly precision={0.5} />
                                </Box>
                                <Typography color="#646068" fontSize={12} paragraph sx={{ mb: 1, mt: 1 }}>
                                    {data.reviewer}
                                </Typography>
                                <Typography color="#646068" fontSize={14} component="h6" variant="h6">
                                    {data.title}
                                </Typography>
                                <Typography color="#646068" fontSize={12} paragraph sx={{ pt: 1 }}>
                                    {data.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </>
    )
}

export default Review