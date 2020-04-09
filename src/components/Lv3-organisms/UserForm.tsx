import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions/UserActions';
import IUser, { Gender } from '../../models/IUser';
import LabeledTetBox from '../Lv2-molecules/LabeledTextBox';
import LabeledRadioButton from '../Lv2-molecules/LabeledRadioButton';
import { styled } from '../Theme';

const Container = styled.div``;

const TextBox = styled(LabeledTetBox)`
  margin-bottom: 1em;
`;

const RadioList = styled(LabeledRadioButton)`
  margin-bottom: 1em;
`;

interface IProps {
  user: IUser;
}

const UserForm: React.FC<IProps> = props => {
  const user = useMemo(() => props.user, [props.user]);
  const dispatch = useDispatch();
  const onFamilyNameOnChange = useCallback((value: string) => {
    dispatch(setUser({ familyName: value }));
  }, []);
  const onGivenNameOnChange = useCallback((value: string) => {
    dispatch(setUser({ givenName: value }));
  }, []);
  const onGenderOnChange = useCallback((value: string) => {
    dispatch(setUser({ gender: value as Gender }));
  }, []);
  const genderSelect = useMemo(
    (): { label: string; value: Gender }[] => [
      {
        label: '男',
        value: 'man',
      },
      {
        label: '女',
        value: 'woman',
      },
      {
        label: '回答しない',
        value: 'none',
      },
    ],
    [],
  );
  return (
    <Container>
      <TextBox
        label="姓"
        value={user.familyName}
        onChange={onFamilyNameOnChange}
      />
      <TextBox
        label="名"
        value={user.givenName}
        onChange={onGivenNameOnChange}
      />
      <RadioList
        label="性別"
        name="gender"
        selectItems={genderSelect}
        value={user.gender}
        onChange={onGenderOnChange}
      />
    </Container>
  );
};

export default UserForm;
