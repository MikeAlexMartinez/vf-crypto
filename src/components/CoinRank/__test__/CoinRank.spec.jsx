import React from 'react';
import { mount } from 'enzyme';
import CoinRank from '../CoinRank';


describe('<CoinRank />', () => {
  const rank = 1;
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CoinRank rank={1} />);
  })

  it('should render with text Rank in h3', () => {
    expect(wrapper.find('h3').text()).toBe('Rank');
  })

  it('should render given rank in p tag', () => {
    expect(wrapper.find('p').text()).toBe(`${rank}`);
  })
});
