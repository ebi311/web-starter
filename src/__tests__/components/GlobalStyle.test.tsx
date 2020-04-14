import React from 'react';
import { GlobalStyle } from '../../components/GlobalStyle';
import { shallow } from 'enzyme';

describe('GlobalStyle', () => {
  test('success', () => {
    const wrapper = shallow(<GlobalStyle />);
    expect(wrapper).toMatchSnapshot();
  });
});
