import {CREATE_DECK_SUCCESS, createDeckSuccess} from './actions/index';

describe('createDeckSuccess', () => {
  it('Should return the action', () => {
    const deck = {deckTitle:'title', deckCards: {cardTerm: 'term', cardDefinition: 'definition'}};
    const action = createDeckSuccess(deck);
    expect(action.type).toEqual(CREATE_DECK_SUCCESS);
    expect(action.deck).toEqual(deck);
  });
});
