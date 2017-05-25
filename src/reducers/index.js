import { combineReducers } from 'redux';

import title from 'reducers/title';
import connectivity from 'reducers/connectivity';

export const reducers = { title, connectivity };

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    ...reducers,
  });
}
