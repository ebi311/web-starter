import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../models/IState';
import IUser from '../../models/IUser';
import UserTemplate from '../Lv4-templates/UserTemplate';

const UserPage: React.FC = () => {
  const user = useSelector<IState, IUser>(s => s.user);
  return <UserTemplate user={user} />;
};

export default UserPage;
