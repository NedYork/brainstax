var React = require('react');


module.exports = React.createClass({
  getInitialState: function() {
    return { title: "" };
  },

  resetDefaultState: function() {
    this.setState({ title: "" });
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
