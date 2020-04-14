import { save, saveUser, __privet__ } from '../../actions/UserActions';
import IUser from '../../models/IUser';

describe('save', () => {
  const dispatch = jest.fn();
  const user: IUser = {
    familyName: 'nanashi',
    givenName: 'gonbe',
    gender: 'man',
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let saveToSessionStorage: any;
  beforeEach(() => {
    dispatch.mockClear();
    saveToSessionStorage = __privet__.saveToSessionStorage;
  });
  afterEach(() => {
    __privet__.saveToSessionStorage = saveToSessionStorage;
  });
  test('success', async () => {
    await save(user, dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).nthCalledWith(1, saveUser.started({}));
    expect(dispatch).nthCalledWith(
      2,
      saveUser.done({ params: {}, result: {} }),
    );
  });
  test('failed', async () => {
    const error = new Error();
    __privet__.saveToSessionStorage = jest.fn(() => {
      throw error;
    });
    await save(user, dispatch);
    expect(dispatch).nthCalledWith(2, saveUser.failed({ params: {}, error }));
  });
});
