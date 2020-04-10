import React from 'react';
import { shallow } from 'enzyme';
import LabeledTextBox from '../../../components/Lv2-molecules/LabeledTextBox';

describe('LabeledTextBox', () => {
  test('success', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <LabeledTextBox label="l001" value="v001" onChange={onChange} />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
    const textbox = wrapper.find('TextBox');
    textbox.simulate('change', { currentTarget: { value: 't001' } });
    expect(onChange).toBeCalledWith('t001');
    onChange.mockClear();
    textbox.simulate('blur', { currentTarget: { value: 't002' } });
    expect(onChange).toBeCalledWith('t002');
  });
});
