var React = require('react');
var SubjectItem = require('./subject_item');
var SubjectStore = require('../../stores/subject_store');
var ApiUtil = require('../../util/api_util');


module.exports = React.createClass({
  getInitialState: function() {
    return { subjects: SubjectStore.all() };
  },

  componentDidMount: function() {
    this.StoreListener = SubjectStore.addListener(this.handleUpdate);
    ApiUtil.fetchSubjects();
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.setState({ subjects: SubjectStore.all() });
  },

  deleteSubject: function(subject) {
    ApiUtil.deleteSubject(subject);
  },

  render: function() {
    return (
      <div className='subject-nav-list'>
        <h3> SUBJECTS </h3>
        {
          <ul>
            {this.state.subjects.map(function (subject) {
              return (
                <li key={subject.id}>
                  <SubjectItem subject={subject}/>
                  <button className="delete-button" onClick={this.deleteSubject.bind(this, subject)}>Delete</button>
                </li>
              );
            }.bind(this))}
          </ul>
        }
        {this.props.children}
      </div>
    );
  }
});
