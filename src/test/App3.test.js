import React from 'react';
import { render, screen } from '@testing-library/react';
import Review from '../components/shared/Review';

describe('Review Component', () => {
    const reviewData = [
        {
            rating: 4,
            reviewer: 'John Doe',
            title: 'Great Platform',
            description: 'Ive been using this platform for a year now, and it has been amazing.',
        },
    ];

    it('should render review content correctly', () => {
        render(<Review reviewData={reviewData} />);

        // Test the presence of the title and introductory text
        expect(screen.getByText("Don't just take our word for it")).toBeInTheDocument();
        expect(screen.getByText('Over 300,000+ investors track their investments with NIT. Here’s what a few of them have to say:')).toBeInTheDocument();

        // Test the star rating and additional information
        expect(screen.getByText('Excellent')).toBeInTheDocument();
        expect(screen.getByText('Rated 4.4 / 5 based on 362 reviews on Google')).toBeInTheDocument();

        // Test the presence of each review
        for (const review of reviewData) {
            expect(screen.getByText(review.reviewer)).toBeInTheDocument();
            expect(screen.getByText(review.title)).toBeInTheDocument();
            expect(screen.getByText(review.description)).toBeInTheDocument();
        }
    });

    it('should render "Showing our favorite reviews" text', () => {
        render(<Review reviewData={reviewData} />);

        // Test the presence of the "Showing our favorite reviews" text
        expect(screen.getByText('Showing our favorite reviews')).toBeInTheDocument();
    });
});
