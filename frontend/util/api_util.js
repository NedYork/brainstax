var UserActions = require('../actions/user');
var ApiActions = require('../actions/api_actions')

var ApiUtil = {
  createSubject: function(subject, callback) {
    // $.post("api/subjects", { title: title }, function(subject) {
    //   ApiActions.addSubject(subject);
    //   debugger;
    // });

    // ASK HOW TO GET AUTHOR_ID WHEN USER CREATES A NEW SUBJECT.
    $.ajax({
      url: "api/subjects",
      dataType: "json",
      type: "POST",
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

  fetchSubjects: function(id) {
    $.get("api/subjects" + id, {}, function(subjects) {
      ApiActions.receiveAll(subjects);
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
