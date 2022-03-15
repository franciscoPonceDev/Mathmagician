import React from 'react';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="calculator" className="calculator">
        <div className="display">1993</div>
        <button type="button" className="btn-gray">
          AC
        </button>
        <button type="button" className="btn-gray">
          +/-
        </button>
        <button type="button" className="btn-gray">
          %
        </button>
        <button type="button" className="btn-orange">
          +
        </button>
        <button type="button" className="btn-gray">
          7
        </button>
        <button type="button" className="btn-gray">
          8
        </button>
        <button type="button" className="btn-gray">
          9
        </button>
        <button type="button" className="btn-orange">
          X
        </button>
        <button type="button" className="btn-gray">
          4
        </button>
        <button type="button" className="btn-gray">
          5
        </button>
        <button type="button" className="btn-gray">
          6
        </button>
        <button type="button" className="btn-orange">
          -
        </button>
        <button type="button" className="btn-gray">
          1
        </button>
        <button type="button" className="btn-gray">
          2
        </button>
        <button type="button" className="btn-gray">
          3
        </button>
        <button type="button" className="btn-orange">
          +
        </button>
        <button type="button" className="btn-gray zero">
          0
        </button>
        <button type="button" className="btn-gray">
          .
        </button>
        <button type="button" className="btn-orange">
          =
        </button>
      </div>
    );
  }
}
