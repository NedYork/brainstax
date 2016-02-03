var React = require('react');
var StudyShowNav = require('./study_show_nav');
var StudyShowMain = require('./study_show_main');

module.exports = React.createClass({
  // getInitialState: function() {
  //   return { revealed: false };
  // },
  // toggleState: function() {
  //   this.setState({ revealed: !this.state.revealed });
  // },
  //
  render: function() {
    return(
      <div className="study group" onClick={ this.toggleState }>
        <StudyShowNav />
        <StudyShowMain deckId={this.props.params.id} />
        {this.props.children}
      </div>
    );
  }
});
