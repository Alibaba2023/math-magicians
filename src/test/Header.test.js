import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Components/Header';

describe('Header Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders the header title correctly', () => {
    const { getByText } = render(<Header />);
    const headerTitle = getByText('Math Magicians');
    expect(headerTitle).toBeInTheDocument();
  });

  test('renders the navigation items correctly', () => {
    const { getByText } = render(<Header />);
    const homeLink = getByText('Home');
    const calculatorLink = getByText('Calculator');
    const quotesLink = getByText('Quotes');
    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quotesLink).toBeInTheDocument();
  });
});
