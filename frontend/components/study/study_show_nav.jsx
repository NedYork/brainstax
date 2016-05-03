var React = require('react');
var CardForm = require('../card/card_form.jsx');
var History = require('react-router').History;
var ProgressBar = require('./study_show_progress');

module.exports = React.createClass({
  mixins: [History],
  
  doDone: function() {
    this.props.removeAllSteps();
    this.history.pushState({}, "/user/:id");
  },
  render: function() {
    return(
      <div className="study-show-nav group">

        <div className="progress-panel group">

          <div className="mastery-header">
            Now Studying ...
          </div>
          <CardForm deckId={this.props.deckId} />

          <div className="done-button" onClick={this.doDone}>Done</div>

          <div className="cards-left">
          </div>
        </div>
      </div>

    );
  }
})
;
