var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _cards = [];
var CardStore = new Store(AppDispatcher);
var CardConstants = require('../constants/card_constants');


CardStore.all = function () {
  return _cards.slice();
};

var resetCards = function(cards) {
  _cards = cards;
};

var updateEf = function(fam) {
  var ff;
  if (fam <= 1) {
    ff = 0.85;
  } else if (fam == 2) {
    ff = 0.92;
  } else if (fam == 3) {
    ff = 1.1;
  } else if (fam == 4) {
    ff = 1.41;
  } else if (fam >= 5) {
    ff = 1.8;
  }
  return ff;
};

CardStore.rate = function(rating) {
  CardStore.currentCard().ef_value *= updateEf(rating);
  return CardStore.currentCard().ef_value;
};

CardStore.next = function() {
  var currentStack = CardStore.all();
  var first = currentStack.shift();
  var index = first.ef_value * 3;
  if (index > currentStack.length - 1) {
    currentStack.push(first);
  } else {
    currentStack.splice(index, 0, first);
  }
  resetCards(currentStack);
};

CardStore.currentCard = function() {
  return CardStore.all()[0];
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
