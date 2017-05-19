import { Map } from 'immutable';

import createReducer from 'lib/helpers/createReducer'
import { TITLE_SET } from 'lib/constants/actions'

export default createReducer(state = Map().set('title', 'title from default state'), {

  [TITLE_SET](state, action) {
    return state.set('title', action.payload);
  },

});
