import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import LoginModal from './LoginModal';
import { navItems, profileItems } from '../../constants/config';

const Default = ({ children }) => {

    const [showLogin, setShowLogin] = useState(false);

    const handleSignIn = () => {
        console.log('adasd');
        setShowLogin(!showLogin);
    }

    return (
        <>
            <NavBar navItems={navItems} profileItem={profileItems} handleSignIn={handleSignIn} />
            <LoginModal showLogin={showLogin} handleClose={handleSignIn} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Default