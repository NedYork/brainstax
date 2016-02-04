var UserActions = require('../actions/user');
var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  addDeck: function(deck, subjectId, callback) {
    $.ajax({
      url: "/api/decks",
      type: "POST",
      dataType: "json",
      data: { deck: deck, subject_id: subjectId },
      success: function(deck) {
        // something like this below. fix this
        ApiAction.addDeck(deck);
        callback && callback();
      }
    });
  },

  massCreateCards: function(formData) {
    $.ajax({
      url: "/api/cards/mass_create",
      type: "POST",
      processData: false,
      contentType: false,
      dataType: "json",
      data: formData,
      success: function(data) {
        // update CardStore from after the ajax request
        console.log("upload success");
      }
    });
  },
  createCard: function(card, callback) {
    $.ajax({
      url: "/api/cards",
      dataType: "json",
      data: { card: card },
      type: "POST",
      success: function(data) {
        ApiActions.addCard(data);
        callback && callback();
      }
    });
  },
  updateEf: function(rating, card_id) {
    $.ajax({
      url: "/api/usercardratings",
      dataType: "json",
      data: { rating: rating, card_id: card_id },
      type: "PATCH",
      success: function(data) {
        console.log(data);
      }
    });
  },
  // fix this ajax request
  // by doing the json jbuilder
  fetchCards: function(deck_id) {
    $.ajax({
      url: "/api/decks/" + deck_id,
      dataType: "json",
      type: "GET",
      success: function(deck) {
        console.log("retreived cards!")
        ApiActions.retrieveCards(deck.cards);
      }
    });
  },

  createSubject: function(subject, callback) {
    $.ajax({
      url: "api/subjects",
      type: "POST",
      dataType: "json",
      data: { subject: subject },
      success: function(subject) {
        ApiActions.addSubject(subject);
        callback && callback(subject.author_id);
      },
      error: function(subject) {
        console.log(subject);
      }
    });
  },

  fetchUser: function (id) {
    $.ajax({
      type: "GET",
      url: "api/users/" + id,
      dataType: "json",
      success: UserActions.addUser
      // success: function (user) {
      //   UserActions.addUser(user);
      // }
    });
  },


  fetchSingleSubject: function(id) {
    $.ajax({
      url: "/api/subjects/" + id,
      type: "GET",
      dataType: "json",
      success: function(data) {
        ApiActions.addSubject(data);
      }
    });
  },


  fetchSubjects: function() {
    $.ajax({
      url: "/api/subjects",
      type: "GET",
      dataType: "json",
      success: function(data) {
        ApiActions.receiveAll(data);
      }
    });

  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
