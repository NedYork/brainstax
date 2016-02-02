var React = require('react');
var ApiUtil = require('../../util/api_util');
var CardStore = require('../../stores/card_store');

module.exports = React.createClass({
  // taken from subject store.
  resetToInitialState: function() {
    this.setState({ currentCard: CardStore.currentCard(), front: true });
  },

  getInitialState: function() {
    return { currentCard: CardStore.currentCard(), front: true };
  },

  componentWillMount: function() {
    this.StoreListener = CardStore.addListener(this.handleUpdate);
    ApiUtil.fetchCards(69);
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.setState({ currentCard: CardStore.currentCard() });
  },

  flip: function() {
    this.setState( {front: !this.state.front });
  },

  // dbRegister: function(rating) {
  //   ApiUtil.updateEf(rating, this.state.current_card);
  // },

  rateCard: function(rating) {
    CardStore.rate(rating);
    // Update EF Value in Database
    ApiUtil.updateEf(rating, CardStore.currentCard().id);
    CardStore.next();
    this.resetToInitialState();
  },

  render: function() {
    var cardText = "";
    var side = "";
    if (this.state.currentCard) {
      if (this.state.front) {
        side = "Front";
        cardText = this.state.currentCard.front;
      } else {
        side = "Back";
        cardText = this.state.currentCard.back;
      }
    }

    var rating;
    if (!this.state.front) {
      rating = (<ul>
        <li>
          <button className="rating group" onClick={this.rateCard.bind(this, 1)}>
            1
          </button>
        </li>
        <li>
          <button className="rating group" onClick={this.rateCard.bind(this, 2)}>
            2
          </button>
        </li>
        <li>
          <button className="rating group" onClick={this.rateCard.bind(this, 3)}>
            3
          </button>
        </li>
        <li>
          <button className="rating group" onClick={this.rateCard.bind(this, 4)}>
            4
          </button>
        </li>
        <li>
          <button className="rating group" onClick={this.rateCard.bind(this, 5)}>
            5
          </button>
        </li>
      </ul>);
    } else {
      rating = (<button className="rating group" onClick={this.flip}>
      Reveal Answer
      </button>);
    }


    return(
      <div className="study-show-main group">
        <h3>{side}</h3>

        <div className="flashcard group" onClick={this.flip}>
          {cardText}
        </div>

        {rating}
      </div>
    );
  }
});
