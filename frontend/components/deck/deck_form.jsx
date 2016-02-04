var React = require('react');
var ApiUtil = require('../../util/api_util');

module.exports = React.createClass({
  getInitialState: function() {
    return { name: "" };
  },

  resetDefaultState: function() {
    this.setState({ name: "" });
  },

  handleChange: function(e) {
    this.setState({ name: e.target.value });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    ApiUtil.addDeck(this.state, this.props.subjectId, this.resetDefaultState);
  },
  render: function() {
    return(
      <div className="subject-nav-form">
        <h1>Add A Deck</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={'e.g. Genetics'} onChange={this.handleChange}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
});
