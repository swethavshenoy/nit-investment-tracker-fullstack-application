import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { CircularProgress, Box } from '@mui/material';
import LoginModal from './LoginModal';
import { navItems, profileItems } from '../../constants/config';
import { useSelector } from 'react-redux';

const Default = ({ children, cartData }) => {

    const [showLogin, setShowLogin] = useState(false);

    const handleSignIn = () => {
        console.log('adasd');
        setShowLogin(!showLogin);
    }

    const loader = useSelector((state) => state.loader);

    return (
        <>
            <NavBar navItems={navItems} profileItem={profileItems} handleSignIn={handleSignIn} cartData={cartData} />
            <LoginModal showLogin={showLogin} handleClose={handleSignIn} />
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