var React = require('react');
var ApiUtil = require('../util/api_util');


module.exports = React.createClass({
  getInitialState: function() {
    return { title: "" };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    // current user
    // ApiUtil.createSubject({author_id: current_user, title: this.state.title});
    ApiUtil.createSubject(this.state.title);
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
