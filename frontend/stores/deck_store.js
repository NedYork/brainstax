var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _decks = [];
var DeckStore = new Store(AppDispatcher);
var DeckConstants = require('../constants/deck_constants');

DeckStore.all = function () {
  return _decks.slice();
};

var resetDecks = function(decks) {
  if (!decks) {
    _decks = [];
  } else {
    _decks = decks;
  }
};

var addDeck = function(deck) {

};

var deleteDeck = function(deck) {

};

DeckStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case DeckConstants.FETCH_DECKS:
    resetDecks(payload.decks);
    DeckStore.__emitChange();
    break;

    case DeckConstants.ADD_DECKS:
    addDeck(payload.deck);
    DeckStore.__emitChange();
    break;

    case DeckConstants.DELETE_DECKS:
    deleteDeck(payload.deck);
    DeckStore.__emitChange();
    break;
  }
};

window.xyz = DeckStore;

module.exports = DeckStore;
