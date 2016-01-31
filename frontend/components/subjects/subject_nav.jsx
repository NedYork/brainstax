var React = require('react');
var SubjectForm = require('./subject_form');
var SubjectList = require('./subject_list');
var SubjectStore = require('../../stores/subject');

module.exports = React.createClass({

  render: function() {

    return (
      <div className="subject-nav">
        <SubjectList subjects={SubjectStore.all()} />
        <SubjectForm />
        {this.props.children}
      </div>
    );
  }
});
