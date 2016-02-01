var UserActions = require('../actions/user');
var ApiActions = require('../actions/api_actions');

var ApiUtil = {
  updateEf: function(rating, cardId) {
    $.ajax({
      url: "/api/usercardratings",
      dataType: "json",
      data: { rating: rating, cardId: cardId },
      type: "PATCH",
      success: function(data) {
        console.log(data);
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
