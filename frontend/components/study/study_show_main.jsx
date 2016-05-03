// var React = require('react');
// var ApiUtil = require('../../util/api_util');
// var CardStore = require('../../stores/card_store');
//
// module.exports = React.createClass({
//   getInitialState: function() {
//     return { currentCard: CardStore.currentCard(), front: true};
//   },
//
//   componentWillMount: function() {
//     this.StoreListener = CardStore.addListener(this.handleUpdate);
//     ApiUtil.fetchCards(this.props.deckId);
//   },
//
//   componentWillUnmount: function() {
//     this.StoreListener.remove();
//   },
//
//   handleUpdate: function() {
//     this.setState({ currentCard: CardStore.currentCard(), front: true });
//   },
//
//   flip: function() {
//     $(".flashcard").toggleClass("flipped");
//     this.setState({front: !this.state.front });
//   },
//
//   rateCard: function(rating) {
//     var efVal = CardStore.rate(rating);
//     // Delay added to not show card
//     setTimeout(function() {
//       ApiUtil.updateEf(efVal, CardStore.currentCard().id);
//       CardStore.next();
//       this.handleUpdate();
//     }.bind(this), 100);
//   },
//
//   render: function() {
//     var frontSide, backSide, frontCardText, backCardText;
//     if (this.state.currentCard) {
//       frontSide = "FRONT: Q.";
//       frontCardText = this.state.currentCard.front;
//       backSide = "BACK: A.";
//       backCardText = this.state.currentCard.back;
//     }
//     if (!this.state.front) {
//       var that = this;
//       ratingbar = (
//           <div className="ratebar">
//             <ul>
//               {[1,2,3,4,5].map(function(num) {
//                  return (<li key={num}>
//                    <a onClick={that.rateCard.bind(that, num)}>
//                      {num}
//                    </a>
//                  </li>);
//                })}
//             </ul>
//           </div>
//         );
//     } else {
//       ratingbar = (
//         <div className="reveal">
//           <button>
//             Reveal Answer
//           </button>
//         </div>
//       );
//     }
//
//     return(
//       <div className="study-show-main group">
//         <div className="flashcard group" onClick={this.flip}>
//           <div className="card-flipper">
//             <div className="cardfront">
//               <h4>{frontSide}</h4>
//               <h3>{frontCardText}</h3>
//             </div>
//             <div className="cardback">
//               <h4>{backSide}</h4>
//               <h3>{backCardText}</h3>
//             </div>
//           </div>
//         </div>
//
//         <div className="rating-container group" onClick={this.flip}>
//           {ratingbar}
//         </div>
//       </div>
//     );
//   }
// });

var React = require('react');
var ApiUtil = require('../../util/api_util');
var CardStore = require('../../stores/card_store');

module.exports = React.createClass({
  getInitialState: function() {
    return { currentCard: CardStore.currentCard(), front: true};
  },

  componentWillMount: function() {
    this.StoreListener = CardStore.addListener(this.handleUpdate);
    ApiUtil.fetchCards(this.props.deckId);
  },

  componentWillUnmount: function() {
    this.StoreListener.remove();
  },

  handleUpdate: function() {
    this.setState({ currentCard: CardStore.currentCard(), front: true });
  },

  flip: function() {
    $(".flashcard").toggleClass("flipped");
    this.setState({front: !this.state.front });
  },

  rateCard: function(rating) {
    var efVal = CardStore.rate(rating);
    // Delay added to not show card
    setTimeout(function() {
      ApiUtil.updateEf(efVal, CardStore.currentCard().id);
      CardStore.next();
      this.handleUpdate();
    }.bind(this), 120);
  },

  render: function() {

    if (!this.state.front) {
      var that = this;
      ratingbar = (
          <div className="ratebar">
            <ul>
              {[1,2,3,4,5].map(function(num) {
                return (<li key={num}>
                  <a onClick={that.rateCard.bind(that, num)}>
                    {num}
                  </a>
                </li>);
              })}
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
    var frontSide, backSide, frontCardText, backCardText, finalReturn;
    if (this.state.currentCard) {
      frontSide = "FRONT: Q.";
      frontCardText = this.state.currentCard.front;
      backSide = "BACK: A.";
      backCardText = this.state.currentCard.back;

      finalReturn = (
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
    } else {
      finalReturn = (
        <div className="study-show-no-cards">
          <p className="no-cards">
            You have no cards in this deck at this moment.
          </p>
        </div>);
    }

    return(
      finalReturn
    );
  }
});
