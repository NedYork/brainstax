var React = require('react');
var StudyShowNav = require('./study_show_nav');
var StudyShowMain = require('./study_show_main');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="study">
        <StudyShowNav />
        <StudyShowMain />
        {this.props.children}
      </div>
    );
  }
});
