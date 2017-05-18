import { Map } from 'immutable';

import createReducer from 'lib/createReducer'
import { SET_TITLE } from 'constants/actions'

export default createReducer(state = Map().set('title', 'default title'), {

  [SET_TITLE](state, action) {
    return state.set('title', action.payload);
  },

});
