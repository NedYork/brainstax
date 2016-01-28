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
      <div>
        {this.props.subject.title}
      </div>
    )
  }
});
