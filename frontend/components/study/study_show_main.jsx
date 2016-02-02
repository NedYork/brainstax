var React = require('react');
var ApiUtil = require('../../util/api_util');
var CardStore = require('../../stores/card_store');

module.exports = React.createClass({
  // taken from subject store.
  getInitialState: function() {
    return { currentCard: CardStore.currentCard() };
  },

  componentDidMount: function() {
    this.CardListener = CardStore.addListener(this.handleUpdate);
    ApiUtil.fetchCards();
  },

  componentWillUnmount: function() {
    this.CardListener.remove();
  },

  handleUpdate: function() {
    this.setState({ currentCard: CardStore.currentCard() });
  },

  flip: function() {

  },

  dbRegister: function(rating) {
    ApiUtil.updateEf(rating, this.state.current_card);
  },

  render: function() {
    return(
      <div className="study-show-main group" onClick={ this.flip }>
        <div className="flashcard group">
          {this.state.currentCard.front}
        </div>

        <button className="rating group" onClick={ this.dbRegister(4) }>
          Rate 4;
        </button>
      </div>
    );
  }
});
