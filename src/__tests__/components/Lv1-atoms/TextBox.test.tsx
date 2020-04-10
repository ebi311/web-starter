import React from 'react';
import TextBox from '../../../components/Lv1-atoms/TextBox';
import { shallow } from 'enzyme';

describe('TextBox', () => {
  test('success', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <TextBox value="text" onChange={onChange} />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
    wrapper.simulate('change');
    expect(onChange).toBeCalled();
  });
});
