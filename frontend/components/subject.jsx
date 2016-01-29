var React = require('react');
var History = require('react-router').History;


module.exports = React.createClass({
  mixins: [History],

  showDetail: function() {

    // not sure if this works yet
    this.history.pushState(null, '/subject/' + this.props.subject.id, {});
  },

  render: function() {
    return (
        <a href="" className="subject-nav-topic group" onClick={this.showDetail} >
          <img src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png" />
          <h4>{this.props.subject.title}</h4>


          <div className="progress-bar">
            // nothing here yet
          </div>
        </a>
    );
  }
});
