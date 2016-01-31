var React = require('react');
var ApiUtil = require('../../util/api_util');
var Subject = require('./subject');
var SubjectNav = require('./subjectnav');
var SubjectList = require("./subject_list");
var SubjectStore = require("../../stores/subject");

module.exports = React.createClass({
  getStateFromStore: function() {
    return { subject: SubjectStore.find(parseInt(this.props.params.id)) };
  },

  _onChange: function() {
    this.setState(this.getStateFromStore());
  },

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

  render: function() {
    if (!(this.state.subject && this.state.subject.decks)) { return <div></div>; }
    return (
      <div className="subject-detail-main group">



        <div className="subject-detail-main group">
          <img src="https://brainscape-prod.s3.amazonaws.com/images/avatar_generic_square.png" />
          <a href={"#/subjects/" + this.state.subject.id} className="title">
            {this.state.subject.title}
          </a>

          <div className="progress-bar">
            // nothing here yet
          </div>

        </div>


        <div className="decklist group">
          <h5>DECKS</h5>
          <ul>
            {this.state.subject.decks.map(function(deck) {
              return (
                <li key={deck.id} className="deck">
                  <a href={"/#/deck/" + deck.id}>{deck.name}</a>
                </li>
              );
            }.bind(this))}
          </ul>
        </div>

        {this.props.children}

      </div>
    );
  }
});
