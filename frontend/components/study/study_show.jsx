var React = require('react');
var StudyShowNav = require('./study_show_nav');
var StudyShowMain = require('./study_show_main');
var Joyride = require('react-joyride');

module.exports = React.createClass({
  componentDidMount: function() {
    var steps = [
      {
        title: 'Single new card',
        text: 'You can create a single new card by adding a "front", "back", and clicking "save"',
        selector: '.single-new-card-form',
        position: 'right',
        type: 'click'
      },
      {
        title: 'Upload cards feature',
        text: 'You can upload a excel sheet with two columns "front" and "back" saved as a .csv file and have your cards ready to go!',
        selector: '.upload-cards',
        position: 'right',
        type: 'click'
      },
      {
        title: 'Star Wars Demo',
        text: 'Or you can try our <i>Star Wars</i> trivia demo to test-drive our SRS algorithm.',
        selector: '.star-wars-demo',
        position: 'right',
        type: 'click'
      }
    ];
    this.props.addSteps(steps);
    this.props.joyride.start();
  },

  render: function() {
    return(
      <div className="study group" onClick={ this.toggleState }>
        <StudyShowNav addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} removeAllSteps={this.props.removeAllSteps} deckId={this.props.params.id} />
        <StudyShowMain deckId={this.props.params.id} />
        {this.props.children}
      </div>
    );
  }
});
