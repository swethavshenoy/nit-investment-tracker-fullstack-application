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
import apple from '../images/dashboard/apple.png'
import meta from '../images/dashboard/meta.png'
import microsoft from '../images/dashboard/microsoft.png'
import google from '../images/dashboard/google.png'
import spotify from '../images/dashboard/spotify.png'
import shopify from '../images/dashboard/shopify.png'
import dropbox from '../images/dashboard/dropbox.png'
import paypal from '../images/dashboard/paypal.png'
import sony from '../images/dashboard/sony.png'
import amazon from '../images/dashboard/amazon.png'
import bajaj from '../images/dashboard/bajaj.jpg'
import tata from '../images/dashboard/Tata.png'
import airtel from '../images/dashboard/airtel.jpg'
import indigo from '../images/dashboard/indigo.png'

export const tiersData = [
    {
        title: 'Free',
        price: '0',
        description: [
            '1 Portfolio',
            '2 Holdings (5 Quantity)',
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
            '5 Holdings (20 Quantity)',
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

export const profileItems = [
    { name: 'My Profile', path: 'investment' },
    { name: 'Transaction History', path: 'history' },
    { name: 'Pricing', path: 'pricing' },
    { name: 'Logout', path: 'logout' },
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
        img: performance,
    },
    {
        title: 'Automate your dividend tracking',
        description: 'Watch as corporate actions such as dividends, DRPs and share splits are automatically updated in your portfolio',
        img: automation
    },
    {
        title: 'Instantly share your tax reports',
        description: 'Share your portfolio and tax reports with your accountant and save time, money and hassle during the tax season.',
        img: tax
    },
];

export const featureCardBottom = [
    {
        title: 'Brokers',
        description: 'Automatically import trades from 200+ global brokers.',
        img: broker,
    },
    {
        title: 'Markets',
        description: 'Track stocks, ETFs and funds in 40+ markets worldwide.',
        img: market
    },
    {
        title: 'Software',
        description: 'Connect to any of our leading software partners.',
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
        description: 'NIT launches internationally with a ₹2m capital raise from our customer base.',
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

export const investments = [
    {
        id: 1,
        name: 'Apple Inc. (AAPL)',
        quantity: 50,
        pricePerShare: 150,
    },
    {
        id: 2,
        name: 'Microsoft Corporation (MSFT)',
        quantity: 30,
        pricePerShare: 300,
    },
    {
        id: 3,
        name: 'Amazon.com Inc. (AMZN)',
        quantity: 10,
        pricePerShare: 3500,
    },
];

export const transactions = [
    {
        id: 1,
        type: 'Buy',
        investment: 'Apple Inc. (AAPL)',
        quantity: 10,
        pricePerShare: 150,
        totalCost: 1500,
    },
    {
        id: 2,
        type: 'Sell',
        investment: 'Microsoft Corporation (MSFT)',
        quantity: 15,
        pricePerShare: 310,
        totalCost: 4650,
    },
    {
        id: 3,
        type: 'Buy',
        investment: 'Amazon.com Inc. (AMZN)',
        quantity: 5,
        pricePerShare: 3500,
        totalCost: 17500,
    },
];

export const stockHoldingData = [
    { logo: bajaj, name: 'Bajaj', shares: '₹310.4', return: '-110%', state: 'grow' },
    { logo: meta, name: 'Meta', shares: '₹310.4', return: '-110%', state: 'down' },
    { logo: microsoft, name: 'Microsoft', shares: '₹310.4', return: '-110%', state: 'grow' },
    { logo: tata, name: 'Tata', shares: '₹310.4', return: '-110%', state: 'grow' },

    { logo: sony, name: 'Sony', shares: '₹310.4', return: '-110%', state: 'grow' },
    { logo: google, name: 'Google', shares: '₹310.4', return: '-110%', state: 'down' },
    { logo: amazon, name: 'Amazon', shares: '₹310.4', return: '-110%', state: 'down' },
    { logo: apple, name: 'Apple', shares: '₹310.4', return: '-110%', state: 'grow' },
];

export const stockWishlistData = [
    { logo: apple, name: 'Apple', id: 'APPLE', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: indigo, name: 'Indigo', id: 'INGO', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: sony, name: 'Sony', id: 'SONY', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: amazon, name: 'Amazon', id: 'AMZ', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: bajaj, name: 'Bajaj', id: 'BAJAJ', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: tata, name: 'Tata', id: 'TATA', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: airtel, name: 'Airtel', id: 'ARTL', shares: '₹310.4', return: '-110%', count: 0 },

    { logo: spotify, name: 'Spotify', id: 'SPOT', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: shopify, name: 'Shopify', id: 'SHOP', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: dropbox, name: 'Dropbox Inc', id: 'DBX', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: microsoft, name: 'Microsoft', id: 'MICRO', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: google, name: 'Google', id: 'GOOGLE', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: meta, name: 'Meta', id: 'META', shares: '₹310.4', return: '-110%', count: 0 },
    { logo: paypal, name: 'Paypal', id: 'PYPL', shares: '₹310.4', return: '-110%', count: 0 },
]