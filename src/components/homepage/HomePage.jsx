import React from 'react';
import { tiersData, navItems, reviewData } from '../../constants/config'
import './HomePage.css'
import Review from './components/Review';
import Footer from './components/Footer';
import NavBar from '../shared/NavBar';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import JoinUs from './components/JoinUs';

const HomePage = () => {
    return (
        <>
            <NavBar navItems={navItems} />

            <Portfolio />

            <Pricing tiersData={tiersData} />

            <Review reviewData={reviewData} />

            <JoinUs />

            <Footer />
        </>
    )
}

export default HomePage
