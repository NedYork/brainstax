var AppDispatcher = require('../dispatcher/dispatcher');
var SubjectConstants = requrie('../constants/subject_constants');

var ApiActions = {
  receiveAll: function(subjects) {
    AppDispatcher.dispatcher({
      actionType: SubjectConstants.SUBJECTS_RECEIVED,
      subjects: subjects
    });
  }
};

module.exports = ApiActions;
