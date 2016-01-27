var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var _subjects = [];
var SubjectStore = new Store(AppDispatcher);

SubjectStore.all = function () {
  return _subjects.slice();
};

window.SubjectStore = SubjectStore;

module.exports = SubjectStore;
