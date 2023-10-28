import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Avatar, Stack, Alert } from '@mui/material';
import logo from '../../images/logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import MenuDrop from '../shared/MenuDrop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { loginPopup } from '../../redux/loginPopupSlice';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import SnackAlert from '../shared/SnackAlert';
import { myprofileItem } from '../../redux/myprofileSlice';
import { transactionItem } from '../../redux/transactionSlice';
import { stockItem } from '../../redux/stockSlice';
import { performanceItem } from '../../redux/performanceSlice';
import { useLocation } from 'react-router-dom';
import { cartItem } from '../../redux/cartSlice';

function notificationsLabel(count) {
    if (count === 0) {
        return 'no notifications';
    }
    if (count > 99) {
        return 'more than 99 notifications';
    }
    return `${count} notifications`;
}

const NavBar = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const { navItems, profileItem } = props;

    const [anchorEl, setAnchorEl] = useState(null);
    const [profileEl, setProfileEl] = useState(null);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState('');

    const open = Boolean(anchorEl);
    const openProfile = Boolean(profileEl);

    const cartData = useSelector((state) => state.cart);
    const totalQty = useSelector((state) => state.totalQuantity);
    const userData = JSON.parse(localStorage.getItem('userDetails'));

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
        // e?.path === 'logout' && localStorage.clear();
        if (e?.path === 'logout') {
            localStorage.clear();
            dispatch(stockItem([]))
            dispatch(transactionItem([]))
            dispatch(myprofileItem({}))
            dispatch(performanceItem([]))
            dispatch(cartItem([]))
        }
        navigate(`/${e.path === 'logout' ? '' : e.path}`);
        handleClose();
    }

    const handleCartClick = (data) => {
        const msgcart = 'You have reached max quantity';
        const msgQty = 'You have already purchased max quantity';
        const cart = cartData.cartCount || 0;
        if (((cart + totalQty) > 5) && userData.usertype === "Free") {
            setOpenAlert(true);
            setAlertMsg(`${totalQty > 5 ? msgQty : msgcart}, please upgrade your membership. You can buy upto ${5 - totalQty} quantity.`);
        } else if (((cart + totalQty) > 20) && userData.usertype === "Pro") {
            setOpenAlert(true);
            setAlertMsg(`${totalQty > 20 ? msgQty : msgcart}, please upgrade to Enterprise membership. You can buy upto ${20 - totalQty} quantity.`);
        } else if (!cart) {
            setOpenAlert(true);
            setAlertMsg("Your cart is empty");
        } else {
            navigate('/checkout', { state: data });
        }
    }

    const handleCloseAlert = () => {
        setOpenAlert(false);
    }

    const handleLogSignup = (e) => {
        dispatch(loginPopup(e));
    }

    return (
        <AppBar position="sticky" sx={{ backgroundColor: '#5a287d' }}>
            <SnackAlert openAlert={openAlert} handleClose={handleCloseAlert} msg={alertMsg} />
            <Toolbar sx={{ justifyContent: 'space-between', display: "flex" }}>
                <IconButton edge="start" aria-label="menu" onClick={() => handleNavigate('')}>
                    <img src={logo} alt='Image1' height={50} width={50} />
                    {/* <h5 className='heading'>NIT</h5> */}
                </IconButton>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, pl: 5, display: { xs: "none", md: "flex" } }}>
                    {navItems.map((item, index) => <Button key={index} onClick={() => handleNavigate(item)}>{item.name}</Button>)}
                </Typography>
                <Box sx={{ justifyContent: 'space-between', display: "flex" }}>
                    {isEmpty(userData) ?
                        <>
                            <Button onClick={() => handleLogSignup('login')}>LogIn</Button>
                            <Button onClick={() => handleLogSignup('signup')}>SignUp</Button>
                        </> :
                        <Typography variant="h5" component="div">
                            <MenuDrop open={openProfile} handleClick={handleProfileClick} anchorEl={profileEl} handleClose={handleClose} navItems={profileItem} handleNavigate={handleProfileNavigate}>
                                <Avatar sx={{ bgcolor: '#fff', color: '#5a287d', fontWeight: 'bold' }} >{userData?.fname[0] + userData.lname[0]}</Avatar>
                            </MenuDrop>
                            {location.pathname !== '/checkout' && <IconButton aria-label={notificationsLabel(100)}>
                                <Badge badgeContent={cartData.cartCount || '0'} color="secondary">
                                    <ShoppingCartIcon style={{ color: "#fff" }} onClick={() => handleCartClick(cartData)} />
                                </Badge>
                            </IconButton>}
                        </Typography>
                    }
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <MenuDrop open={open} handleClick={handleClick} anchorEl={anchorEl} handleClose={handleClose} navItems={navItems} handleNavigate={handleNavigate}>
                            <MenuIcon />
                        </MenuDrop>
                    </Typography>
                </Box>
            </Toolbar>
            {((userData?.usertype === 'Free' && totalQty >= 5) || (userData?.usertype === 'Pro' && totalQty >= 20)) &&
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="warning">Your a {userData?.usertype} member and already purchased {totalQty} quantity, Kindy Upgrade your membership to purchase more stocks</Alert>
                </Stack>
            }
        </AppBar>
    )
}

export default NavBar
