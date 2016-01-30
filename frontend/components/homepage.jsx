var React = require('react'),
    ApiUtil = require('../util/api_util');

var Navbar = require('./nav/home_page_nav');

var HomePage = React.createClass({
  render: function () {
    return (
      <div>
        <Navbar></Navbar>
        THIS IS THE HOME PAGE
        {this.props.children}
      </div>
    );
  }
});

module.exports = HomePage;
