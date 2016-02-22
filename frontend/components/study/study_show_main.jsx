var React = require('react');
var ApiUtil = require('../../util/api_util');
var CardStore = require('../../stores/card_store');

module.exports = React.createClass({
  // taken from subject store.
  getInitialState: function() {
    return { currentCard: CardStore.currentCard(), front: true };
  },

  componentWillMount: function() {
    this.StoreListener = CardStore.addListener(this.handleUpdate);
    ApiUtil.fetchCards(this.props.deckId);
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    // ApiUtil.fetchCards(this.props.deckId);
    this.setState({ currentCard: CardStore.currentCard(), front: true });
  },

  flip: function() {
    $(".flashcard").toggleClass("flipped");
    this.setState({front: !this.state.front });
  },

  rateCard: function(rating) {
    var efVal = CardStore.rate(rating);
    // Update EF Value in Database
    ApiUtil.updateEf(efVal, CardStore.currentCard().id);
    CardStore.next();
    this.handleUpdate();
  },

  render: function() {
    var frontSide, backSide, frontCardText, backCardText;
    if (this.state.currentCard) {
      frontSide = "FRONT: Q.";
      frontCardText = this.state.currentCard.front;
      backSide = "BACK: A.";
      backCardText = this.state.currentCard.back;
    }

    var rating, comfortability;
    if (!this.state.front) {
      ratingbar = (
          <div className="ratebar">
            <ul>
              <li>
                <a onClick={this.rateCard.bind(this, 1)}>
                  1
                </a>
              </li>
              <li>
                <a onClick={this.rateCard.bind(this, 2)}>
                  2
                </a>
              </li>
              <li>
                <a onClick={this.rateCard.bind(this, 3)}>
                  3
                </a>
              </li>
              <li>
                <a onClick={this.rateCard.bind(this, 4)}>
                  4
                </a>
              </li>
              <li>
                <a onClick={this.rateCard.bind(this, 5)}>
                  5
                </a>
              </li>
            </ul>
          </div>
        );
    } else {
      ratingbar = (
        <div className="reveal">
          <button>
            Reveal Answer
          </button>
        </div>
      );
    }

    return(
      <div className="study-show-main group">

        <div className="flashcard group" onClick={this.flip}>
          <div className="card-flipper">
            <div className="cardfront">
              <h4>{frontSide}</h4>
              <h3>{frontCardText}</h3>
            </div>

            <div className="cardback">
              <h4>{backSide}</h4>
              <h3>{backCardText}</h3>
            </div>

          </div>
        </div>
        
        <div className="rating-container group" onClick={this.flip}>
          {ratingbar}
        </div>

      </div>
    );
  }
});
