var React = require('react');
var DeckItem = require('./deck_item');
var DeckStore = require('../../stores/deck_store');


module.exports = React.createClass({
  getInitialState: function() {
    return { decks: DeckStore.all() };
  },

  componentDidMount: function() {
    this.StoreListener = DeckStore.addListener(this.handleUpdate);
    ApiUtil.fetchDecks();
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.setState({ decks: DeckStore.all() });
    // this.forceUpdate();
  },

  render: function() {
    return (
      
    );
  }
});
