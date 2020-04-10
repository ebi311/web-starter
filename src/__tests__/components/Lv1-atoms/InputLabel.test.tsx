import { shallow } from 'enzyme';
import React from 'react';
import InputLabel from '../../../components/Lv1-atoms/InputLabel';

describe('InputLabel', () => {
  test('success', () => {
    const wrapper = shallow(
      <InputLabel>
        <div>hoge</div>
      </InputLabel>,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
