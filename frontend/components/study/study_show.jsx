var React = require('react');
var StudyShowNav = require('./study_show_nav');
var StudyShowMain = require('./study_show_main');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="study group" onClick={ this.toggleState }>
        <StudyShowNav deckId={this.props.params.id} />
        <StudyShowMain deckId={this.props.params.id} />
        {this.props.children}
      </div>
    );
  }
});
