import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import logo from '../images/logo.jpg';

const HomePage = () => {
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
                        <Button color="warning">About Us</Button>
                    </Typography>
                    <Button color="warning">LogIn</Button>
                    <Button color="warning">SignUp</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default HomePage
