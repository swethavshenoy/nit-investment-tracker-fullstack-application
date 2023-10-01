import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Fade, Box } from '@mui/material';
import logo from '../../images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';

import './NavBar.css'

const NavBar = (props) => {

    const { navItems } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', display: "flex" }}>
                <IconButton edge="start" aria-label="menu">
                    <img src={logo} alt='Image1' height={50} width={50} />
                    {/* <h5 className='heading'>NIT</h5> */}
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, pl: 5, display: { xs: "none", md: "flex" } }}>
                    {navItems.map((item, index) => <Button key={index}>{item}</Button>)}
                </Typography>
                <Box sx={{ justifyContent: 'space-between', display: "flex" }}>
                    <Button>LogIn</Button>
                    <Button>SignUp</Button>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <div>
                            <Button
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </Button>
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >
                                {navItems.map((item, index) => <MenuItem key={index} onClick={handleClose}>{item}</MenuItem>)}
                            </Menu>
                        </div>

                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
