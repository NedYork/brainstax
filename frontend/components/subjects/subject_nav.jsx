var React = require('react');
var SubjectForm = require('./subject_form');
var SubjectList = require('./subject_list');
var SubjectStore = require('../../stores/subject_store');

module.exports = React.createClass({

  render: function() {
    return (
      <div className="subject-nav">
        <SubjectList changeSubjectAndPopulateDeck={this.props.changeSubjectAndPopulateDeck} addSteps={this.props.addSteps} subjects={SubjectStore.all()} />
        <SubjectForm addSteps={this.props.addSteps}/>
        {this.props.children}
      </div>
    );
  }
});
