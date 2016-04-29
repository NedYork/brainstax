var AppDispatcher = require('../dispatcher/dispatcher');
var SubjectConstants = require('../constants/subject_constants');
var CardConstants = require('../constants/card_constants');
var DeckConstants = require('../constants/deck_constants');
var ApiActions = {
  fetchDecks: function(decks) {
    AppDispatcher.dispatch({
      actionType: DeckConstants.FETCH_DECKS,
      decks: decks
    });
  },
  removeSubject: function(subject) {
    AppDispatcher.dispatch({
      actionType: SubjectConstants.REMOVE_SUBJECT,
      subject: subject
    });
  },
  signInAfterSignUp: function(currentUser) {
    AppDispatcher.dispatch({
        actionType: current_user_constants.RECEIVE_CURRENT_USER,
        currentUser: currentUser
    });
  },
  addDeck: function(deck, subjectId) {
    AppDispatcher.dispatch({
      actionType: SubjectConstants.ADD_DECK,
      deck: deck,
      subjectId: subjectId
    });
  },
  removeDeck: function(deck, subjectId) {
    AppDispatcher.dispatch({
      actionType: SubjectConstants.REMOVE_DECK,
      deck: deck,
      subjectId: subjectId
    });
  },
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
