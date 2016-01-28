var ApiUtil = {
  createSubject: function(subject) {
    // $.post("api/subjects", { title: title }, function(subject) {
    //   ApiActions.addSubject(subject);
    //   debugger;
    // });
    $.ajax({
      url: "api/subjects",
      dataType: "json",
      type: "POST",
      data: { subject: subject },
      success: function(subject) {
        console.log(subject);
        ApiActions.addSubject(subject);
      },
      error: function(subject) {
        console.log(subject);
      }
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
