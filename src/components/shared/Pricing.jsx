import React from 'react'
import { Typography, Container, Box, Button, Grid, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Pricing = (props) => {
    const { tiersData } = props;

    const navigate = useNavigate();

    const userData = JSON.parse(localStorage.getItem('userDetails'));

    const handlePay = (e) => {
        navigate('/checkout', { state: e });
    }

    return (
        <>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pb: 2 }}>
                <Typography
                    component="h1"
                    variant="h3"
                    align="center"
                    color="#5a287d"
                    gutterBottom
                >
                    Our Plans & Pricing
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiersData.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                        color: '#646068'
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                        color: '#5a287d'
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="#5a287d">
                                            ₹{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="#646068">
                                            /Year
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                key={line}
                                                color="#646068"
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                {userData?.usertype !== tier.title && <CardActions>
                                    <Button color='primary'
                                        fullWidth
                                        variant={tier.buttonVariant} onClick={() => handlePay(tier)}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>}
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Typography color="#646068" sx={{ pt: 2 }} paragraph>*Prices in Indian Rupees. Taxes may apply. All paid plans include a 7 day free trial.</Typography>
            </Container>
        </>
    )
}

export default Pricing