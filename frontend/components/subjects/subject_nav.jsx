var React = require('react');
var SubjectForm = require('./subject_form');
var SubjectList = require('./subject_list');
var SubjectStore = require('../../stores/subject_store');

module.exports = React.createClass({
  componentDidMount: function() {
    var steps = [
      {
        title: 'Your subjects',
        text: 'You can select your favorite subject here to reveal its decks.',
        selector: '.subject-nav',
        position: 'top',
        type: 'click'
      }
    ];
    this.props.addSteps(steps);
  },

  render: function() {
    return (
      <div className="subject-nav">
        <SubjectList addSteps={this.props.addSteps} subjects={SubjectStore.all()} />
        <SubjectForm addSteps={this.props.addSteps}/>
        {this.props.children}
      </div>
    );
  }
});
