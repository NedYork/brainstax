var React = require('react');
var ApiUtil = require('../util/api_util');
var History = require('react-router').History;


module.exports = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return { title: "" };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.createSubject(this.state, function(id) {
      this.setState({ title: "" });
    }.bind(this));
  },
  handleChange: function(e) {
    this.setState({ title: e.target.value });
  },
  render: function() {
    return (
      <div className="subject-form">
        <h1>Make a new Subject!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type="text" placeholder={'e.g. Biology 101'} onChange={this.handleChange}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
});
