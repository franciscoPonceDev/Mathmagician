import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Quote function', () => {
  it('quotes render correct', () => {
    const tree = renderer.create(<Quote />).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
});
