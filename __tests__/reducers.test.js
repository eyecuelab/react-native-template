import { Map } from 'immutable';

import { TITLE_SET } from 'lib/constants/actions';
import { reducers } from 'reducers/index';

describe('reducers', () => {
  describe('title', () => {
    it(`should react to an action with the type ${TITLE_SET}`, () => {
      const newTitle = 'new title';
      const defaultState = Map();
      const nextState = Map().set('title', newTitle);
      expect(
        reducers.title(defaultState, {
          type: TITLE_SET,
          payload: newTitle,
        }))
      .toEqual(nextState);
    });
  });
});
