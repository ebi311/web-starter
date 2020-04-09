import { combineReducers, createStore } from 'redux';
import { IState } from './models/IState';
import userReducer from './reducers/UserReducer';

const reducer = combineReducers<IState>({
  user: userReducer,
});

const store = createStore(reducer);

export default store;
