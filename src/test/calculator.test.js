import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Components/calculator';

describe('Calculator Component', () => {
  test('renders correctly', () => {
    const { container } = render(<Calculator />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('handles button click correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const inputElement = getByDisplayValue('');

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(inputElement.value).toBe('3');
  });

  test('handles AC button click correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const inputElement = getByDisplayValue('');

    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('AC'));
    expect(inputElement.value).toBe('');
  });

  test('handles division by zero correctly', () => {
    const { getByText, getByDisplayValue } = render(<Calculator />);
    const inputElement = getByDisplayValue('');

    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('÷'));
    fireEvent.click(getByText('0'));
    fireEvent.click(getByText('='));
    expect(inputElement.value).toBe("Can't divide by 0.");
  });
});
