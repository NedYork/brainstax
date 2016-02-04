var AppDispatcher = require('../dispatcher/dispatcher');
var SubjectConstants = require('../constants/subject_constants');
var CardConstants = require('../constants/card_constants');

var ApiActions = {

  addCard: function(card) {
    AppDispatcher.dispatch({
      actionType: CardConstants.ADD_CARD,
      card: card
    });
  },
  retrieveCards: function(cards) {
    AppDispatcher.dispatch({
      actionType: CardConstants.CARDS_RECEIVED,
      cards: cards
    });
  },

  receiveAll: function(subjects) {
    AppDispatcher.dispatch({
      actionType: SubjectConstants.SUBJECTS_RECEIVED,
      subjects: subjects
    });
  },

  addSubject: function(subject) {
    AppDispatcher.dispatch({
      actionType: SubjectConstants.ADD_SUBJECT,
      subjects: subject
    });
  }
};

module.exports = ApiActions;
