import actions from 'actions/index';

describe('actions', () => {

  describe('setTitle', () => {
    it('should deliver new title', () => {
      const title = 'Test Title';
      expect(actions.setTitle(title).payload).toEqual(title);
    });
  });

});
