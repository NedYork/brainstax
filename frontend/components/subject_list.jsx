var React = require('react');
var Subject = require('./subject');
// var SubjectStore = require('./stores/subject');


module.exports = React.createClass({
  componentDidMount: function() {
    this.StoreListener = SubjectStore.addListener(this.handleUpdate);
    ApiUtil.fetchSubjects();
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.forceUpdate();
  },


  render: function() {
    return (
      <div className='subject-nav-list'>
        {
          <ul>
            {SubjectStore.all().map(function (subject) {
              return (
                <li>
                  <Subject key={subject.id} subject={subject}/>
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
