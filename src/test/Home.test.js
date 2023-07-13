import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Components/Home';

describe('Home Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('has the correct CSS class for home container', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toHaveClass('home-container');
  });
});
