var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="study-show-main group" onClick={ this.flip }>
        <div className="flashcard group">
        </div>

        <div className="rating group">
        </div>
      </div>
    );
  }
});
