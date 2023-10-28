import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Pricing from '../components/shared/Pricing';

describe('Pricing Component', () => {
    const tiersData = [

    ];

    it('should render pricing tiers correctly', () => {
        render(
            <BrowserRouter>
                <Pricing tiersData={tiersData} />
            </BrowserRouter>
        );

        // Test the presence of pricing tier titles, prices, and buttons
        for (const tier of tiersData) {
            expect(screen.getByText(tier.title)).toBeInTheDocument();
            expect(screen.getByText(`₹${tier.price}`)).toBeInTheDocument();
            expect(screen.getByText(tier.buttonText)).toBeInTheDocument();
        }

        expect(screen.getByText('Our Plans & Pricing')).toBeInTheDocument();
    });

});
