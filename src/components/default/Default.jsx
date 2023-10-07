import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { navItems } from '../../constants/config';

const Default = ({ children }) => {
    return (
        <>
            <NavBar navItems={navItems} />
            <main >{children}</main>
            <Footer />
        </>
    )
}

export default Default