var React = require('react');
var Subject = require('./subject');


module.exports = React.createClass({


  render: function () {
      var subjects = this.props.subjects.map(function (subject) {
      // var subjects = Subject.all.map(function (subject) {
        return <Subject key={subject.id} subject={subject}/>;
      });
      return (
        <div className='subject-list'>
          {subjects}
          {this.props.children}
        </div>
      );
  }
});
