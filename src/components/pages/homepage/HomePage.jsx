import React from 'react';
import { tiersData, reviewData } from '../../../constants/config'
import './HomePage.css'
import Review from '../../shared/Review';
import Pricing from '../../shared/Pricing';
import JoinUs from './components/JoinUs';
import Portfolio from './components/Portfolio';
import Banner from '../../shared/Banner';
import broker from '../../../images/brokers.png';


const HomePage = () => {
    const bannerContent = { title: 'We work with all your favourite brokers and apps', description: 'NIT integrates with hundreds of brokers and finance apps, including Robinhood, Charles Schwab and Interactive Brokers.', image: broker };
    return (
        <>
            <Portfolio />

            <Banner data={bannerContent} />

            <Pricing tiersData={tiersData} />

            <Review reviewData={reviewData} />

            <JoinUs />
        </>
    )
}

export default HomePage
