var React = require('react');
var ApiUtil = require('../../util/api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');


module.exports = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function() {
    return { title: "" };
  },

  componentDidMount: function() {
    var steps = [
      {
        title: 'Create a new subject',
        text: 'Or you can create a brand new subject. <br> Go ahead, try it out!',
        selector: '.subject-nav-form',
        position: 'top',
        type: 'click'
      }
    ];
    this.props.addSteps(steps);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createSubject(this.state, function(id) {
      this.setState({ title: "" });
    }.bind(this));

  },

  render: function() {
    return (
      <div className="subject-nav-form">
        <h1>Create New Subject</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={'e.g. Biology 101'} valueLink={this.linkState('title')}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
});
