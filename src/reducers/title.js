import { Map } from 'immutable';

import createReducer from 'lib/createReducer'
import { SET_TITLE } from 'lib/constants/actions'

export default createReducer(state = Map().set('title', 'default state title'), {

  [SET_TITLE](state, action) {
    return state.set('title', action.payload);
  },

});
