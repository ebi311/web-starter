import reducer from '../../reducers/UserReducer';
import IUser from '../../models/IUser';
import { setUser } from '../../actions/UserActions';

const beforState: IUser = {
  familyName: 'f001',
  gender: 'none',
  givenName: 'g001',
};

test('success', () => {
  const action = setUser({ familyName: 'f002' });
  const afterUser = reducer(beforState, action);
  expect(afterUser).toEqual({
    familyName: 'f002',
    gender: 'none',
    givenName: 'g001',
  });
});
