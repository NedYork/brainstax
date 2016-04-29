var React = require('react');
var ApiUtil = require('../../util/api_util');
var DeckForm = require('../deck/deck_form');
var DeckStore = require('../../stores/deck_store');
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return { decks: [] };
  },

  componentDidMount: function() {
    this.StoreListener = DeckStore.addListener(this.handleUpdate);
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.setState({ decks: DeckStore.all() });
  },

  deleteDeck: function(deck) {
    ApiUtil.deleteDeck(deck);
  },

  enterStudyPage: function(deckId) {
    var path = "/deck/" + deckId;
    this.history.pushState({}, path);
  },

  render: function() {
    if (!(this.props.subject && this.state.decks)) { return <div></div>; }
    return (
      <div className="subject-detail-background group">
        <div className="subject-detail-title group">
          <img src={window.images.check}/>
          <span className="title">
            {this.props.subject.title}
          </span>
        </div>

        <div className="decklist group">
          <h5>DECKS</h5>
          <ol>
            {this.state.decks.map(function(deck) {
              return (
                <li key={deck.id} className="deck">
                  <div onClick={this.enterStudyPage.bind(this, deck.id)}>{deck.name}</div>
                  <button className="delete-button" onClick={this.deleteDeck.bind(this, deck)}>Delete</button>
                </li>
              );
            }.bind(this))}
          </ol>
        </div>
        <DeckForm subjectId={this.props.subject.id}></DeckForm>
        {this.props.children}
      </div>
    );
  }
});
