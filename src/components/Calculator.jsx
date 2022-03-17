import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [toNeOp, setToNeOp] = useState({ total: null, next: null, operation: null });

  const clickHandler = (event) => {
    setToNeOp((prev) => (calculate(prev, event.target.textContent)));
  };

  const { total, next, operation } = toNeOp;

  return (
    <div id="calculator" className="calculator">
      <div className="display">
        {total || '0'}
        {operation || ''}
        {next || ''}
      </div>
      <button onClick={clickHandler} type="button" className="btn-gray">
        AC
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        +/-
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        %
      </button>
      <button onClick={clickHandler} type="button" className="btn-orange">
        ÷
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        7
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        8
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        9
      </button>
      <button onClick={clickHandler} type="button" className="btn-orange">
        x
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        4
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        5
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        6
      </button>
      <button onClick={clickHandler} type="button" className="btn-orange">
        -
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        1
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        2
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        3
      </button>
      <button onClick={clickHandler} type="button" className="btn-orange">
        +
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray zero">
        0
      </button>
      <button onClick={clickHandler} type="button" className="btn-gray">
        .
      </button>
      <button onClick={clickHandler} type="button" className="btn-orange">
        =
      </button>
    </div>
  );
};

export default Calculator;
