import React from 'react';
import { shallow } from 'enzyme';
import UserTemplate from '../../../components/Lv4-templates/UserTemplate';
import IUser from '../../../models/IUser';

describe('UserTemplate', () => {
  const user: IUser = {
    familyName: 'nanashi',
    givenName: 'gonbe',
    gender: 'man',
  };
  test('success', () => {
    const wrapper = shallow(<UserTemplate user={user} />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
