var React = require('react');

module.exports = React.createClass({
  render: function() {
    var that = this;
    return (
      <div className="subject-nav-topic group" onClick={this.props.changeSubjectAndPopulateDeck(this.props.subject.id)}>
        <img src={window.images.check}/>
        <h4>{this.props.subject.title}</h4>
      </div>
    );
  }
});
