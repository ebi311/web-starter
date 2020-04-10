import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../../../components/Lv1-atoms/RadioButton';
describe('RadioButton', () => {
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
      <RadioButton
        name="r001"
        selectItems={items}
        value="v01"
        onChange={onChange}
      />,
    ).dive();
    expect(wrapper).toMatchSnapshot();
    const inputs = wrapper.find('input');
    expect(inputs).toHaveLength(2);
    const input01 = inputs.find('[value="v01"]');
    input01.simulate('change', {
      currentTarget: { checked: false, value: 'v02' },
    });
    expect(onChange).not.toBeCalled();
    const input02 = inputs.find('[value="v02"]');
    input02.simulate('change', {
      currentTarget: { checked: true, value: 'v02' },
    });
    expect(onChange).toBeCalledWith('v02');
  });
  test('success no onChange', () => {
    const wrapper = shallow(
      <RadioButton name="r001" selectItems={items} value="v01" />,
    ).dive();
    const input01 = wrapper.find('[value="v01"]');
    input01.simulate('change', {
      currentTarget: { checked: true, value: 'v02' },
    });
    // 例外が発生しなければOK
  });
});
