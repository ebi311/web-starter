import { actionCreatorFactory } from 'typescript-fsa';
import IUser from '../models/IUser';
import { Dispatch } from 'redux';

const actionCreator = actionCreatorFactory('user-actions');

export const setUser = actionCreator<Partial<IUser>>('set-user');

export const saveUser = actionCreator.async<{}, {}, Error>('save-user');

export const save = (user: IUser, dispatch: Dispatch) => {
  dispatch(saveUser.started);
  new Promise((resolve, reject) => {
    try {
      // 非同期の保存処理
      resolve();
    } catch (e) {
      reject(e);
    }
  })
    .then(() => {
      dispatch(saveUser.done);
    })
    .catch(e => {
      dispatch(saveUser.failed(e));
    });
};
