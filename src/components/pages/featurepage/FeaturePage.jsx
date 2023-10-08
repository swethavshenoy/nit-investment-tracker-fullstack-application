import React from 'react';
import Cards from '../../shared/Cards';
import { featureCardTop, featureCardBottom } from '../../../constants/config';
import Banner from '../../shared/Banner';
import portfolio from '../../../images/features/portfolio-feature.jpg';
import diversification from '../../../images/features/diversification.jpg';
import BannerX from '../../shared/BannerX';


const FeaturePage = () => {

    const bannerContent = { title: 'The best portfolio and investment tracker', description: 'Automatically track price, performance and investments from 240,000+ global stocks. Add cash accounts and property to get the full picture of your portfolio - all in one place.', btnText: 'Signup for free', image: portfolio };

    const bannerContentX = { title: 'See your diversification', description: 'Get deeper insights into your portfolio by exploring your asset allocation and diversification with the Diversity Report.', btnText: 'View pricing plans', image: diversification };

    return (
        <>
            <Banner data={bannerContent} />

            <Cards data={featureCardTop} />

            <BannerX data={bannerContentX} />

            <Cards data={featureCardBottom} />

        </>
    )
}

export default FeaturePage