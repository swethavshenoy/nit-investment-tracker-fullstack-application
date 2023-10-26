import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { CircularProgress, Box } from '@mui/material';
import LoginModal from './LoginModal';
import { navItems, profileItems, checkoutItems } from '../../constants/config';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const Default = ({ children }) => {

    const loader = useSelector((state) => state.loader);
    const location = useLocation();

    return (
        <>
            <NavBar navItems={location.pathname !== '/checkout' ? navItems : []} profileItem={location.pathname !== '/checkout' ? profileItems : checkoutItems} />
            <LoginModal />
            {loader && <Box sx={{ position: 'absolute', top: '50%', left: '50%', width: '100%', height: '100%', zIndex: '9' }}>
                <CircularProgress />
            </Box>}
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Default