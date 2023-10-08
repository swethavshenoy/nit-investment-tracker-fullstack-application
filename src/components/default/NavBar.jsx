import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Avatar } from '@mui/material';
import logo from '../../images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrop from '../shared/MenuDrop';

const NavBar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const { navItems, handleSignIn, profileItem } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [profileEl, setProfileEl] = useState(null);


    const open = Boolean(anchorEl);
    const openProfile = Boolean(profileEl);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClick = (event) => {
        setProfileEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setProfileEl(null);
    };

    const handleNavigate = (e) => {
        navigate(`/${e.path || e}`);
        handleClose();
    }

    const handleProfileNavigate = (e) => {
        navigate(`/${e.path === 'logout' ? '' : e.path}`);
        handleClose();
    }


    return (

        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between', display: "flex" }}>
                <IconButton edge="start" aria-label="menu" onClick={() => handleNavigate('')}>
                    <img src={logo} alt='Image1' height={50} width={50} />
                    {/* <h5 className='heading'>NIT</h5> */}
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, pl: 5, display: { xs: "none", md: "flex" } }}>
                    {navItems.map((item, index) => <Button key={index} onClick={() => handleNavigate(item)}>{item.name}</Button>)}
                </Typography>
                <Box sx={{ justifyContent: 'space-between', display: "flex" }}>
                    {location.pathname !== '/dashboard' ?
                        <>
                            <Button onClick={handleSignIn}>LogIn</Button>
                            <Button>SignUp</Button>
                        </> :
                        <Typography variant="h5" component="div">
                            <MenuDrop open={openProfile} handleClick={handleProfileClick} anchorEl={profileEl} handleClose={handleClose} navItems={profileItem} handleNavigate={handleProfileNavigate}>
                                <Avatar sx={{ bgcolor: '#fff', color: '#5a287d', fontWeight: 'bold' }} >SC</Avatar>
                            </MenuDrop>
                        </Typography>
                    }
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <MenuDrop open={open} handleClick={handleClick} anchorEl={anchorEl} handleClose={handleClose} navItems={navItems} handleNavigate={handleNavigate}>
                            <MenuIcon />
                        </MenuDrop>
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
