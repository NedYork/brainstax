var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { name: "" };
  },

  resetDefaultState: function() {
    this.setState({ name: "" });
  },

  handleChange: function(e) {
    this.setState({ name: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.addDeck(this.state, this.props.subjectId, this.resetDefaultState);
  },
  render: function() {
    return(
      <div className="deck-form">
        <h1>Create New Deck</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={'e.g. Genetics'} valueLink={this.linkState('name')}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
});
