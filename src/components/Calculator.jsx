import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  clickHandler(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculator" className="calculator">
        <div className="display">
          {total || '0'}
          {operation || ''}
          {next || ''}
        </div>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          AC
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          +/-
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          %
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-orange">
          ÷
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          7
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          8
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          9
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-orange">
          x
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          4
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          5
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          6
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-orange">
          -
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          1
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          2
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          3
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-orange">
          +
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray zero">
          0
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-gray">
          .
        </button>
        <button onClick={this.clickHandler} type="button" className="btn-orange">
          =
        </button>
      </div>
    );
  }
}
