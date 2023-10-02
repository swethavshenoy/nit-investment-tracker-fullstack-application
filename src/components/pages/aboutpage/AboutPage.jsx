import React from 'react'
import Banner from '../../shared/Banner';

import globe from '../../../images/about/globe.jpg';
import { aboutCard } from '../../../constants/config';
import Cards from '../../shared/Cards';

const AboutPage = () => {

    const bannerContent = { title: 'We build smart tools to make you a smarter investor', description: 'We show what brokers don’t – the full picture of your investments no matter where you are on your financial journey.', btnText: 'Signup for free', image: globe };

    return (
        <>
            <Banner data={bannerContent} />
            <Cards data={aboutCard} />
        </>
    )
}

export default AboutPage