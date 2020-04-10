import React from 'react';
import LabeledRadioButton from '../../../components/Lv2-molecules/LabeledRadioButton';
import { shallow } from 'enzyme';

describe('LabeledRadioButton', () => {
  const items = [
    {
      label: 'r01',
      value: 'v01',
    },
    {
      label: 'r02',
      value: 'v02',
    },
  ];
  test('success', () => {
    const onChange = jest.fn();
    const wrapper = shallow(
      <LabeledRadioButton
        label="label001"
        name="name001"
        value="v001"
        selectItems={items}
        onChange={onChange}
      />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
