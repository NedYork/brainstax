var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _subjects = [];
var SubjectStore = new Store(AppDispatcher);
var SubjectConstants = require('../constants/subject_constants');


SubjectStore.all = function () {
  return _subjects.slice();
};

var resetSubjects = function(subjects) {
  _subjects = subjects;
};

SubjectStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SubjectConstants.SUBJECTS_RECEIVED:
    // calls a SubjectStore action which takes the payload
    resetSubjects(payload.subjects);
    SubjectStore.__emitChange();
    break;
  }
};

window.SubjectStore = SubjectStore;

module.exports = SubjectStore;
