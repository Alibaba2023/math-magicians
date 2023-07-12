import React, { useState } from 'react';
import calculate from '../Logic/calculate';
import './style.css';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const numbers = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="calculator-container">
      <input
        type="text"
        value={calculatorData.next || calculatorData.total || ''}
        className="input-result"
        readOnly
      />
      <ul className="numbers-container">
        {numbers.map((number) => (
          <li className="list-item" key={number}>
            <button type="button" className="number" onClick={() => handleButtonClick(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calculator;
