var React = require('react');
// var History = require('react-router').History;


module.exports = React.createClass({
  // mixins: [History],

  // showDetail: function() {
  //
  //   // not sure if this works yet
  //   this.history.pushState(null, '/subjects/' + this.props.subject.id, {});
  // },

  render: function() {
    return (
        <a href={"#/subject/" + this.props.subject.id} className="subject-nav-topic group">
          <img src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png" />
          <h4>{this.props.subject.title}</h4>


          <div className="progress-bar">
            
          </div>
        </a>
    );
  }
});
