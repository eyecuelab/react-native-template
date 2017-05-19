import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer'
import { SET_TITLE } from 'lib/constants/actions'

export default createReducer(state = Map().set('title', 'title from default state'), {

  [SET_TITLE](state, action) {
    return state.set('title', action.payload);
  },

});
