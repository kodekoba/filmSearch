import React from 'react';
import SearchHeader from '../SearchHeader';
import renderer from 'react-test-renderer';

describe('SearchHeader', () => {
  
  it('matches snapshot', () => {
    
    const tree = renderer.create(
      <SearchHeader/>
    ).toJSON();
    
    expect(tree).toMatchSnapshot();
  });
  
});