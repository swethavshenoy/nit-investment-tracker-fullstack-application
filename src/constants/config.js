import performance from '../images/features/performace.png'
import automation from '../images/features/automation.png'
import tax from '../images/features/tax.png'
import broker from '../images/features/broker.png'
import market from '../images/features/market.png'
import software from '../images/features/software.png'
import blog from '../images/resource/blog.png'
import help from '../images/resource/help.png'
import started from '../images/resource/101.png'
import forum from '../images/resource/forum.png'
import webinar from '../images/resource/webinar.png'
import event from '../images/resource/event.png'
import env from '../images/esg/env.png'
import social from '../images/esg/social.png'
import supply from '../images/esg/supply.png'

export const tiersData = [
    {
        title: 'Free',
        price: '0',
        description: [
            '1 Portfolio',
            '10 Holdings',
            '1 Custom group',
            'Limited reporting',
            'Basic support',
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outlined',
    },
    {
        title: 'Pro',
        subheader: 'Most popular',
        price: '700',
        description: [
            '1 Portfolio',
            '30 Holdings',
            '3 Custom groups',
            'Limited reporting',
            'Standard support',
        ],
        buttonText: 'Get started',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        price: '1000',
        description: [
            '4 Portfolios',
            'Unlimited Holdings',
            '5 Custom groups',
            'Advanced reporting',
            'Standard support',
        ],
        buttonText: 'Get Started',
        buttonVariant: 'outlined',
    },
];

export const navItems = [
    { name: 'Features', path: 'feature' },
    { name: 'Resource', path: 'resource' },
    { name: 'ESG', path: 'esg' },
    { name: 'About Us', path: 'about' }
];

export const reviewData = [
    { rating: 5, reviewer: 'Nicki, September 13', title: 'I find NIT fantastic for…', description: 'I find NIT fantastic for recording, analysing and managing my investment portfolios. Very easy to use and very comprehensive reporting' },

    { rating: 5, reviewer: 'Mike, September 15', title: 'Highly recommend NIT!', description: 'Was able to ditch my error-prone, time-consuming spreadsheet when I switched to NIT years ago. Love the accurate performance calculations and ease of use' },

    { rating: 4, reviewer: 'Judith, September 11', title: 'NIT makes tedious....', description: 'NIT makes all the tedious tasks of managing an equities portfolio extremely easy. Dividends are automatically inserted by NIT own its own' },

    { rating: 4, reviewer: 'Jenny, August 29', title: 'Cant recommend it enough!', description: 'I have been using NIT for almost two years. I have brokerage account and super accounts linked, so that it is automatically updated with all trades.' },

];

export const featureCardTop = [
    {
        title: 'Know your real performance',
        description: 'Compare performance across all of your brokers and assets with detailed reporting, charts, price updates.',
        buttonText: 'See your performance',
        buttonVariant: 'outlined',
        img: performance,
    },
    {
        title: 'Automate your dividend tracking',
        description: 'Watch as corporate actions such as dividends, DRPs and share splits are automatically updated in your portfolio',
        buttonText: 'Track dividends',
        buttonVariant: 'contained',
        img: automation
    },
    {
        title: 'Instantly share your tax reports',
        description: 'Share your portfolio and tax reports with your accountant and save time, money and hassle during the tax season.',
        buttonText: 'Share tax reports',
        buttonVariant: 'outlined',
        img: tax
    },
];

export const featureCardBottom = [
    {
        title: 'Brokers',
        description: 'Automatically import trades from 200+ global brokers.',
        buttonText: 'Learn more',
        buttonVariant: 'outlined',
        img: broker,
    },
    {
        title: 'Markets',
        description: 'Track stocks, ETFs and funds in 40+ markets worldwide.',
        buttonText: 'Learn more',
        buttonVariant: 'outlined',
        img: market
    },
    {
        title: 'Software',
        description: 'Connect to any of our leading software partners.',
        buttonText: 'Learn more',
        buttonVariant: 'outlined',
        img: software
    },
];

export const resourceCard = [
    {
        title: 'Blog',
        description: 'New features, investing tips, data insights and more.',
        img: blog,
    },
    {
        title: 'Help centre',
        description: 'Step-by-step guides on how to use NIT.',
        img: help
    },
    {
        title: 'Get Started 101',
        description: '4 simple steps to set up your portfolio.',
        img: started
    },
    {
        title: 'Forum',
        description: 'Our vibrant community. Connect with fellow investors.',
        img: forum,
    },
    {
        title: 'Webinar',
        description: 'Demos, trending topics and NIT tips.',
        img: webinar
    },
    {
        title: 'Event',
        description: 'Keynotes and event highlights for investors and professionals.',
        img: event
    },
];

export const aboutCard = [
    {
        title: '2006',
        description: 'We are online. Our first paying customer starts tracking performance with NIT. 2013 Our team expands into a second office across the Tasman in Sydney.',
        // img: blog,
    },
    {
        title: '2008',
        description: 'Tired of spreadsheet calculations, a Kiwi father/son duo find a better way to track shares.',
        // img: help
    },
    {
        title: '2013',
        description: 'Our team expands into a second office across the Tasman in Sydney.',
        // img: started
    },
    {
        title: '2015',
        description: 'NIT launches internationally with a $2m capital raise from our customer base.',
        // img: forum,
    },
    {
        title: 'Today',
        description: 'Now a leading fintech company, NIT helps hundreds of thousands of investors.',
        // img: event
    },
];

export const esgCardBottom = [
    {
        title: 'Environmental Issues',
        description: 'Carbon footprint, Energy efficiency, Renewable energy usage, Water usage, Pollution, Waste management, Biodiversity impact',
        img: env
    },
    {
        title: 'Social Issues',
        description: 'Labor practices, Pro-diversity efforts, Human rights, Community relations, Health and safety',
        img: social
    },
    {
        title: 'Governance Issues',
        description: `Board diversity and structure,
        Executive compensation,
        Shareholder rights,
        Business ethics,
        Risk management,
        Supply chain management`,
        img: supply
    },
];