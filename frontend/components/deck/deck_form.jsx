var React = require('react');


module.exports = React.createClass({
  getInitialState: function() {
    return { title: "" };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    

  },
  render: function() {
    return(
      <div className="subject-nav-form">
        <h1>Create New Subject</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={'e.g. Genetics'} onChange={this.handleChange}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
});
