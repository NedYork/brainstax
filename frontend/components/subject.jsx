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
      <div className="subject-nav-topic">
        <a href="">
          <h4>{this.props.subject.title}</h4>
          <img src="" />
        </a>

        <div className="progress-bar">
          // nothing here yet
        </div>
      </div>
    );
  }
});
