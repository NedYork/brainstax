var React = require('react');
var ApiUtil = require('../../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return { front: "", back: "", deck_id: this.props.deckId };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createCard(this.state, function() {
      this.setState({ front: "", back: "", deck_id: this.props.deckId });
    }.bind(this));
    ApiUtil.fetchCards(this.props.deckId);
  },

  handleChange: function(e) {
    this.setState({ title: e.target.value });
  },

  render: function() {
    return (
      <div className="add-card-form">
        <h1>Add New Card to Deck</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Front
            <input type="text" placeholder={'e.g. front'} valueLink={this.linkState('front')} />
          </label>
          <br></br>
          <label> Back
            <input type="textarea" placeholder={'e.g. back'} valueLink={this.linkState('back')} />
          </label>

          <button>Save</button>
        </form>
      </div>
    );
  }
});
