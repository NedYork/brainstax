var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _subjects = [];
var SubjectStore = new Store(AppDispatcher);
var SubjectConstants = require('../constants/subject_constants');


SubjectStore.all = function () {
  // debugger;
  return _subjects.slice();
};

var resetSubjects = function(subjects) {
  _subjects = subjects;
};

SubjectStore.find = function(id) {
  return _subjects.find(function (subject) {
    return subject.id == id;
  });
};

var addSubjects = function(newSubject) {
  var replaced = false;
  _subjects.forEach(function(subject, idx) {
    if (newSubject.id == subject.id) {
      _subjects[idx] = newSubject;
      replaced = true;
    }
  });

  if (!replaced) {
    _subjects.push(subject);
  }

};

SubjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SubjectConstants.SUBJECTS_RECEIVED:
    // calls a SubjectStore action which takes the payload
    resetSubjects(payload.subjects);
    SubjectStore.__emitChange();
    break;

    case SubjectConstants.ADD_SUBJECT:
    addSubjects(payload.subjects);
    SubjectStore.__emitChange();
    break;
  }
};

window.SubjectStore = SubjectStore;

module.exports = SubjectStore;
