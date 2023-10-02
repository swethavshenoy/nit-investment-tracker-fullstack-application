import React from 'react'
import Banner from '../../shared/Banner';
import BannerX from '../../shared/BannerX';
import resourceHub from '../../../images/resource/resource-hub.jpg'
import resourceApi from '../../../images/resource/resourceApi.png'
import { resourceCard } from '../../../constants/config';
import Cards from '../../shared/Cards';

const ResourcePage = () => {

    const bannerContent = { title: 'Resource hub', description: 'Get the most out of NIT. Get started, stay up-to-date on new features or connect with other investors.', btnText: 'Signup for free', image: resourceHub };

    const bannerContentX = { title: 'Connect to our API', description: 'Integrate NIT features straight into your product. The possibilities are endless with our API.', btnText: 'Get Started', image: resourceApi };

    return (
        <>
            <Banner data={bannerContent} />

            <Cards data={resourceCard} />

            <BannerX data={bannerContentX} />

        </>
    )
}

export default ResourcePage