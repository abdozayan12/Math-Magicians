import React from 'react';
import InputButton from './Numbers';
import './Calculator.css';

const number = ['AC', '\u00B1', '%', '\u00F7', 7, 8, 9, '\u00D7', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

function Calculator() {
  return (
    <div className="calc-container">
      <div className="resultScreen">0</div>
      {number.map((n) => (n === '\u00F7' || n === '\u00D7' || n === '-' || n === '+' || n === '=' ? <InputButton inputSymbol={n} key={n} background="red" /> : <InputButton inputSymbol={n} key={n} background="gray" />))}
    </div>
  );
}

export default Calculator;
