var React = require('react');
// var History = require('react-router').History;


module.exports = React.createClass({
  // mixins: [History],
  //
  // showDetail: function(subjectId) {
  //
  //   // not sure if this works yet
  //   this.history.pushState(null, '#/subject/' + this.props.subject.id, {});
  // },


  render: function() {
    return (
        <a href={"#/subject/" + this.props.subject.id} className="subject-nav-topic group">
          <img src={window.images.check}/>
          <h4>{this.props.subject.title}</h4>
        </a>
    );
  }
});
