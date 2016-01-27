var React = require('react');
var ApiUtil = require('../util/api_util');


module.exports = React.createClass({
  getInitialState: function() {
    return { subject: "" };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createSubject(this.state);
  },
  render: function() {
    return (
      <div className="subject-form">
        <h1>Make a new Subject!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input placeholder={'e.g. Biology 101'} />
          <button>Save</button>
        </form>
      </div>
    );
  }
});
