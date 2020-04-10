/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallow } from 'enzyme';
import React from 'react';
import UserForm from '../../../components/Lv3-organisms/UserForm';
import IUser from '../../../models/IUser';

const dispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => dispatch,
}));

jest.mock('../../../actions/UserActions', () => ({
  setUser: jest.fn().mockImplementation((obj: any) => obj),
}));

describe('UserForm', () => {
  const user: IUser = {
    familyName: 'nanashi',
    givenName: 'gonbe',
    gender: 'man',
  };
  test('success', () => {
    const wrapper = shallow(<UserForm user={user} />).dive();
    expect(wrapper).toMatchSnapshot();
    const FamilyNameTextbox = wrapper.find('[label="姓"]');
    FamilyNameTextbox.simulate('change', 'f001');
    expect(dispatch).toBeCalledWith({ familyName: 'f001' });
    dispatch.mockClear();
    const GivenNameTextbox = wrapper.find('[label="名"]');
    GivenNameTextbox.simulate('change', 'g001');
    expect(dispatch).toBeCalledWith({ givenName: 'g001' });
    dispatch.mockClear();
    const GenderRadioButton = wrapper.find('[label="性別"]');
    GenderRadioButton.simulate('change', 'gen001');
    expect(dispatch).toBeCalledWith({ gender: 'gen001' });
  });
});
