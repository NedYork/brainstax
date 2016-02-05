// var React = require('react');
// var CardStore = require('../../stores/card_store');
//
// module.exports = React.createClass({
//   getInitialState: function() {
//     return { cardsLeft: CardStore.all().length };
//   },
//   componentDidMount: function() {
//     this.StoreListener = CardStore.addListener();
//   },
//
//   componentWillUnmount: function() {
//     this.StoreListener.remove();
//   },
//   componentDidUpdate: function() {
//     var percent = parseInt(this.props.percent);
//     var deg = 360*percent/100 ;
//     var element = this.refs.progress.getDOMNode();
//     element.style.transform = 'rotate(-'+ deg +'deg)';
//   },
//   percent: function() {
//     this.state.cardsLeft
//   }
//   render: function() {
//     var percent = Math.floor(this.percent);
//     return (
//       <div className="progress clearfix">
//         <div className="ppc-progress">
//           <div className="ppc-progress-fill" ref="progress"></div>
//         </div>
//         <div className="ppc-percents">
//           <div className="pcc-percents-wrapper">
//             <span>{percent + '%'}</span>
//           </div>
//         </div>
//       </div>
//     );
//   }
// });
