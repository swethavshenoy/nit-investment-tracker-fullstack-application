import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/default/Footer';

describe('Footer Component', () => {
    it('should render footer content correctly', () => {
        render(<Footer />);

        // Test the presence of "About Us" section
        expect(screen.getByText('About Us')).toBeInTheDocument();
        expect(screen.getByText('We are NIT Private Limited, dedicated to providing the best service to our customers.')).toBeInTheDocument();

        // Test the presence of "Contact Us" section
        expect(screen.getByText('Contact Us')).toBeInTheDocument();
        expect(screen.getByText('123 Main Street, Anytown, USA')).toBeInTheDocument();
        expect(screen.getByText('Email: info@example.com')).toBeInTheDocument();
        expect(screen.getByText('Phone: +1 234 567 8901')).toBeInTheDocument();

    });
});
