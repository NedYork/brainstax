var ApiUtil = {
  fetchSubjects: function() {
    $.get("api/subjects", {}, function(subjects) {
      ApiActions.receiveAll(subjects);
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
