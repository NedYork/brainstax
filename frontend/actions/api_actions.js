var AppDispatcher = require('../dispatcher/dispatcher');
var SubjectConstants = require('../constants/subject_constants');

var ApiActions = {
  // receiveAll: function(subjects) {
  //   AppDispatcher.dispatcher({
  //     actionType: SubjectConstants.SUBJECTS_RECEIVED,
  //     subjects: subjects
  //   });
  // },
  //

  addSubject: function(subject) {
    AppDispatcher.dispatcher({
      actionType: SubjectConstants.ADD_SUBJECT,
      subjects: subject
    });
  }
};

module.exports = ApiActions;
