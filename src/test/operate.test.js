import operate from '../Logic/operate';

describe('operate function', () => {
  test('performs addition correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toBe('5');
  });

  test('performs subtraction correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toBe('3');
  });

  test('performs multiplication correctly', () => {
    const result = operate('4', '3', 'x');
    expect(result).toBe('12');
  });

  test('performs division correctly', () => {
    const result = operate('10', '2', '÷');
    expect(result).toBe('5');
  });

  test('handles division by zero correctly', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  test('performs modulo correctly', () => {
    const result = operate('10', '3', '%');
    expect(result).toBe('1');
  });

  test('handles modulo with zero divisor correctly', () => {
    const result = operate('10', '0', '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('handles unknown operation correctly', () => {
    expect(() => {
      operate('2', '3', '*');
    }).toThrow("Unknown operation '*'");
  });
});
