var React = require('react');
var ApiUtil = require('../../util/api_util');
var DeckForm = require('../deck/deck_form');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [History, LinkedStateMixin],

  deleteDeck: function(deck) {
    ApiUtil.deleteDeck(deck);
  },

  enterStudyPage: function(deckId) {
    var path = "/deck/" + deckId;
    this.history.pushState({}, path);
  },

  render: function() {
    if (!(this.props.subject && this.props.subject.decks)) { return <div></div>; }
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
            {this.props.subject.decks.map(function(deck) {
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
