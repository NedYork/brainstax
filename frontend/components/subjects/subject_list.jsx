var React = require('react');
var SubjectItem = require('./subject_item');
var SubjectStore = require('../../stores/subject');


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
    // this.forceUpdate();
  },

  render: function() {
    return (
      <div className='subject-nav-list'>
        {
          <ul>
            {this.state.subjects.map(function (subject) {
              return (
                <li key={subject.id}>
                  <SubjectItem subject={subject}/>
                </li>
              );
            })}
          </ul>
        }
        {this.props.children}
      </div>
    );
  }
});
