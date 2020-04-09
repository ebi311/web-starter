import React from 'react';
import { styled } from '../Theme';
import IUser from '../../models/IUser';
import UserForm from '../Lv3-organisms/UserForm';

const Container = styled.div`
  border: 1px solid ${p => p.theme.foreground1};
  padding: 1em;
  margin: 1em;
`;

interface IProps {
  user: IUser;
}

const UserTemplate: React.FC<IProps> = props => {
  return (
    <Container>
      <UserForm user={props.user} />
    </Container>
  );
};

export default UserTemplate;
