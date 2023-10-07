import React from 'react'
import Cards from '../../shared/Cards';
import { esgCardBottom } from '../../../constants/config';
import Banner from '../../shared/Banner';
import esg from '../../../images/esg/esg1.jpg';
import rating from '../../../images/esg/rating.png';
import BannerX from '../../shared/BannerX';
import { Typography } from '@mui/material';

const EsgPage = () => {
    const bannerContent = { title: 'What Is Environmental, Social, and Governance (ESG) Investing?', description: 'Environmental, social, and governance (ESG) investing refers to a set of standards for a company’s behavior used by socially conscious investors to screen potential investments.', image: esg };

    const bannerContentX = { title: 'How to Tell If a Company Has High ESG Scores', description: 'Environmental, social, and governance (ESG) scores are an essential tool for investors to assess a company’s sustainability and ethical performance. These scores typically range from 0 to 100, with a score of less than 50 considered relatively poor and more than 70 considered good.', image: rating };

    return (
        <>
            <Banner data={bannerContent} />

            <BannerX data={bannerContentX} />

            <Typography color="#646068" component="h1" variant="h4" textAlign="center" sx={{ pb: 5 }}>What Do ESG Scores Measure?</Typography>
            <Cards data={esgCardBottom} />

        </>
    )
}

export default EsgPage