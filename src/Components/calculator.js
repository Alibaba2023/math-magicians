import React from 'react';
import './calculator.css';

const Button = () => {
  const numbers = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div>
      <form action="">
        <input type="text" value="No result" className="input-result" />
      </form>

      <ul className="numbers-container">
        {numbers.map((number) => (
          <li className="number" key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

const Calculator = () => (
  <div className="calculator-container">
    <Button />
  </div>
);

export default Calculator;
