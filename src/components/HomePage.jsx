import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Container, Stack, Grid, Card, CardHeader, CardContent, CardActions } from '@mui/material';
import logo from '../images/logo.jpg';
import graph from '../images/graph.jpg';
import pic1 from '../images/pic1.jpg';

const HomePage = () => {
    const tiers = [
        {
            title: 'Free',
            price: '0',
            description: [
                '1 Portfolio',
                '10 Holdings',
                '1 Custom group',
                'Limited reporting',
                'Basic support',
            ],
            buttonText: 'Get Started',
            buttonVariant: 'outlined',
        },
        {
            title: 'Pro',
            subheader: 'Most popular',
            price: '700',
            description: [
                '1 Portfolio',
                '30 Holdings',
                '3 Custom groups',
                'Limited reporting',
                'Standard support',
            ],
            buttonText: 'Get started',
            buttonVariant: 'contained',
        },
        {
            title: 'Enterprise',
            price: '1000',
            description: [
                '4 Portfolios',
                'Unlimited Holdings',
                '5 Custom groups',
                'Advanced reporting',
                'Standard support',
            ],
            buttonText: 'Get Started',
            buttonVariant: 'outlined',
        },
    ];
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" aria-label="menu">
                        <img src={logo} alt='Image1' height={50} width={50} />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        <a className='heading'>NIT</a>
                        <Button color="warning">Features</Button>
                        <Button color="warning">Pricing</Button>
                        <Button color="warning">Resources</Button>
                        <Button color="warning">ESG</Button>
                        <Button color="warning">Suitable plans</Button>
                        <Button color="warning">About Us</Button>
                    </Typography>
                    <Button color="warning">LogIn</Button>
                    <Button color="warning">SignUp</Button>
                </Toolbar>
            </AppBar>
            {/* Hero Unit */}
            <main className='hero'>
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                        bgcolor: '#fdc880'
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h3"
                            align="center"
                            color="#AF0D24"
                            gutterBottom
                        >
                            Be the smarter investor
                        </Typography>
                        <Typography variant="h5" align="center" color="#AF0D24" paragraph>
                            Powerful portfolio tracking software that lets you check your investments in one place with award-winning performance, dividend tracking and tax reporting.
                        </Typography>
                        <Stack
                            sx={{ pt: 1 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button className='box' variant="contained" sx={{ pt: 1 }} color="warning">Signup for free</Button>
                        </Stack>
                        <img src={graph} alt='portfolio graph' height={643} width={604} />
                    </Container>
                </Box>
            </main>
            {/* Pricing */}
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 2, pb: 2 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Pricing
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
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
                                    action={tier.title === 'Pro'}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
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
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            ₹{tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            /Month
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button color='warning'
                                        fullWidth
                                        variant={tier.buttonVariant}>
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <p>*Prices in Indian Rupees. Taxes may apply. All paid plans include a 7 day free trial.</p>
            </Container>
            {/* Favourite brokers and apps */}
            <Container>
                <Grid container>
                    <Grid item xs color="#AF0D24" sx={{ mt: 15 }}>
                        {<h1>No fuss, free sign up! No credit card needed!</h1>}
                        {<p>The only way to see true performance is to see it in context. Sign up for free without any commitment.</p>}
                        <Button className='box' variant="contained" sx={{ pt: 1 }} color="warning">Signup for free</Button>
                    </Grid>
                    <Grid item xs>
                        <img src={pic1} alt='Pic1' width={660} height={400} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default HomePage
