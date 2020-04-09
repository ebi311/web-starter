import { reducerWithInitialState } from 'typescript-fsa-reducers';
import IUser from '../models/IUser';
import { setUser } from '../actions/UserActions';

const initState: IUser = {
  familyName: '',
  gender: 'none',
  givenName: '',
};

const userReducer = reducerWithInitialState<IUser>(initState)
  .case(setUser, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .build();

export default userReducer;
