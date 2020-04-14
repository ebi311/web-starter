import { actionCreatorFactory } from 'typescript-fsa';
import IUser from '../models/IUser';
import { Dispatch } from 'redux';

const actionCreator = actionCreatorFactory('user-actions');

export const setUser = actionCreator<Partial<IUser>>('set-user');

export const saveUser = actionCreator.async<{}, {}, Error>('save-user');

export const __privet__ = {
  saveToSessionStorage: (user: IUser) => {
    sessionStorage.setItem('user', JSON.stringify(user));
  },
};

export const save = (user: IUser, dispatch: Dispatch) => {
  dispatch(saveUser.started({}));
  return new Promise((resolve, reject) => {
    try {
      __privet__.saveToSessionStorage(user);
      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
      dispatch(saveUser.done({ params: {}, result: {} }));
    })
    .catch(e => {
      dispatch(saveUser.failed({ params: {}, error: e }));
    });
};
