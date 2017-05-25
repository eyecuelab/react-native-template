import { combineReducers } from 'redux';
import title from 'reducers/title';

export const reducers = { title };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
};
