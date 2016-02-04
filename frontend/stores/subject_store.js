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
    _subjects.push(newSubject);
  }

};

var addDeck = function(payload) {
  SubjectStore.find(payload.subjectId).decks.push(payload.deck);
};

var removeDeck = function(payload) {
  var subject = SubjectStore.find(payload.subjectId);
  for (var i = 0; i < subject.decks.length; i++) {
    if (subject.decks[i].id === payload.deck.id) {
      subject.decks.splice(i, 1);
      break;
    }
  }
};

SubjectStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case SubjectConstants.ADD_DECK:
    addDeck(payload);
    SubjectStore.__emitChange();
    break;

    case SubjectConstants.REMOVE_DECK:
    removeDeck(payload);
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

window.SubjectStore = SubjectStore;

module.exports = SubjectStore;
