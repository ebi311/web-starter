import React from 'react';
import UserPage from '../../../components/Lv5-pages/UserPage';
import { shallow } from 'enzyme';
import IUser from '../../../models/IUser';
import { useSelector } from 'react-redux';

jest.mock('react-redux');

describe('UserPage', () => {
  test('success', () => {
    const user: IUser = {
      familyName: 'nanashi',
      givenName: 'gonbe',
      gender: 'man',
    };
    (useSelector as jest.Mock).mockImplementationOnce(fn => fn({ user }));
    const wrapper = shallow(<UserPage />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
