import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { CircularProgress, Box } from '@mui/material';
import LoginModal from './LoginModal';
import { navItems, profileItems } from '../../constants/config';
import { useSelector } from 'react-redux';

const Default = ({ children, cartData }) => {

    const loader = useSelector((state) => state.loader);

    return (
        <>
            <NavBar navItems={navItems} profileItem={profileItems} cartData={cartData} />
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