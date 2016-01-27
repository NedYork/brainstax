var ApiUtil = {
  createSubject: function(title) {
    $.post("api/subjects", { title: title }, function(subjects) {
      ApiActions.receiveAll(subjects);
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
