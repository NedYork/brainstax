var React = require('react');
var SubjectForm = require('./SubjectForm');
var SubjectList = require('./subject_list');
var SubjectStore = require('../stores/subject');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <SubjectList subjects={SubjectStore.all()} />
        <SubjectForm />
        {this.props.children}
      </div>
    );
  }
});
