var React = require('react');
var ApiUtil = require('../../util/api_util');
var SubjectItem = require('./subject_item');
var SubjectNav = require('./subject_nav');
var SubjectList = require('./subject_list');
var SubjectStore = require('../../stores/subject_store');
var DeckForm = require('../deck/deck_form');

module.exports = React.createClass({
  getInitialState: function() {
    return { subject: null };
  },

  componentWillReceiveProps: function(newProps) {
    ApiUtil.fetchSingleSubject(parseInt(newProps.params.id));
  },

  componentDidMount: function() {
    this.subjectListener = SubjectStore.addListener(this._onChange);
    ApiUtil.fetchSingleSubject(parseInt(this.props.params.id));
  },

  componentWillUnmount: function() {
    this.subjectListener.remove();
  },

  getStateFromStore: function() {
    return { subject: SubjectStore.find(parseInt(this.props.params.id)) };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());

  },

  deleteDeck: function(deck) {
    ApiUtil.deleteDeck(deck);
  },

  render: function() {
    if (!(this.state.subject && this.state.subject.decks)) { return <div></div>; }
    return (
      <div className="subject-detail-background group">
        <div className="subject-detail-title group">
          <img src={window.images.check}/>
          <a href={"#/subjects/" + this.state.subject.id} className="title">
            {this.state.subject.title}
          </a>
        </div>

        <div className="decklist group">
          <h5>DECKS</h5>
          <ol>
            {this.state.subject.decks.map(function(deck) {
              return (
                <li key={deck.id} className="deck">
                  <a href={"/#/deck/" + deck.id}>{deck.name}</a>
                  <button className="delete-button" onClick={this.deleteDeck.bind(this, deck)}>Delete</button>
                </li>
              );
            }.bind(this))}
          </ol>
        </div>
        <DeckForm subjectId={this.state.subject.id}></DeckForm>
        {this.props.children}
      </div>
    );
  }
});
