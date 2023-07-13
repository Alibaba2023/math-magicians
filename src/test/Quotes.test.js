import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Quote from '../Components/Quotes';

describe('Quotes', () => {
  it('Renders Quote component', () => {
    const quotes = render(<Quote />);

    expect(quotes).toMatchSnapshot();
  });

  it('Displays loading message while fetching quotes', () => {
    const quotes = render(<Quote />);
    const loading = quotes.getByText('Loading...');
    expect(loading).toBeInTheDocument();
  });
});
