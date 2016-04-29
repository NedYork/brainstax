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

var addDeck = function(deck, subjectId) {
  _decks.push(deck);
};
// for reference
// var addDeck = function(payload) {
//   SubjectStore.find(payload.subjectId).decks.push(payload.deck);
// };


var deleteDeck = function(deck) {
  for (var i = 0; i < _decks.length; i++) {
    if (_decks[i].id === deck.id) {
      _decks.splice(i, 1);
      break;
    }
  }
};

DeckStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case DeckConstants.FETCH_DECKS:
    resetDecks(payload.decks);
    DeckStore.__emitChange();
    break;

    case DeckConstants.ADD_DECK:
    addDeck(payload.deck);
    DeckStore.__emitChange();
    break;

    case DeckConstants.REMOVE_DECK:
    deleteDeck(payload.deck);
    DeckStore.__emitChange();
    break;
  }
};

window.xyz = DeckStore;

module.exports = DeckStore;
