import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/shared/Cards';

describe('Cards Component', () => {
    const data = [
        {
            title: 'Card 1',
            description: 'Description for Card 1',
            buttonText: 'Learn More',
            img: 'card1.jpg',
            buttonVariant: 'contained',
        },
        {
            title: 'Card 2',
            description: 'Description for Card 2',
            buttonText: 'View Details',
            img: 'card2.jpg',
            buttonVariant: 'outlined',
        },
    ];

    it('should apply the correct button variant', () => {
        render(<Cards data={data} />);

        // Test the button variants
        for (const card of data) {
            if (card.buttonText) {
                const button = screen.getByText(card.buttonText);
                expect(button).toHaveClass(`MuiButton-${card.buttonVariant}`);
            }
        }
    });
});
