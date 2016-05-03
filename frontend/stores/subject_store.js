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
    _subjects.push(newSubject);
  }

};

var removeSubject = function(payload) {
  for (var i = 0; i < _subjects.length; i++) {
    if (_subjects[i].id === payload.subject.id) {
      _subjects.splice(i, 1);
    }
  }

};

SubjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SubjectConstants.REMOVE_SUBJECT:
    removeSubject(payload);
    SubjectStore.__emitChange();
    break;

    case SubjectConstants.SUBJECTS_RECEIVED:
    resetSubjects(payload.subjects);
    SubjectStore.__emitChange();
    break;

    case SubjectConstants.ADD_SUBJECT:
    addSubjects(payload.subjects);
    SubjectStore.__emitChange();
    break;
  }
};


module.exports = SubjectStore;
