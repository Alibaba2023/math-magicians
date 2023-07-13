import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Components/footer';

describe('Footer Component', () => {
  test('renders the footer text', () => {
    const { getByText } = render(<Footer />);
    const footerText = getByText(/© 2023 Ali Baba. All rights reserved./i);
    expect(footerText).toBeInTheDocument();
  });

  test('has the correct CSS class', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveClass('footer-box');
  });
});
