/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */

import React from 'react';
import renderer from 'react-test-renderer';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

it('App Renders Correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Clicking on Calculator link renders Calculator', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Calculator'));
  expect(screen.getByText('Do some math!')).toBeInTheDocument();
});

it('Clicking on Home link renders home', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Home'));
  expect(screen.getByText('Welcome to Mathmagician')).toBeInTheDocument();
});

it('Clicking on Quote link renders Quote', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Quote'));
  expect(screen.getByText('Mathemagics is not about numbers, equations,computations, or algorithms; Is about understanding. -William Paul Thurston')).toBeInTheDocument();
});
