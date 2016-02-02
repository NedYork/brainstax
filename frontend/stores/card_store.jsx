var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _cards = [];
var CardStore = new Store(AppDispatcher);
var CardConstants = require('../constants/card_constants');


CardStore.all = function () {
  // debugger;
  return _cards.slice();
};

var resetCards = function(cards) {
  _cards = cards;
};

CardStore.currentCard = function() {
  return CardStore.all().first;
};

CardStore.find = function(id) {
  return _cards.find(function (card) {
    return card.id == id;
  });
};

CardStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case CardConstants.CARDS_RECEIVED:
    // calls a SubjectStore action which takes the payload

    resetCards(payload.cards);
    CardStore.__emitChange();
    break;

    case CardConstants.UPDATE_CARD_EF:


    CardStore.__emitChange();
    break;
  }
};

window.CardStore = CardStore;

module.exports = CardStore;
