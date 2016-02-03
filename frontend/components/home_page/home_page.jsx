var React = require('react');

var ApiUtil = require('../../util/api_util');
var Navbar = require('../nav/home_page_nav');
var Footer = require('../footer/footer');
var HomeBody = require('./home_body.jsx');


var HomePage = React.createClass({
  render: function () {
    return (
      <main className="home-page">
        <Navbar></Navbar>
        <HomeBody></HomeBody>
        {this.props.children}
        <Footer></Footer>
      </main>



    );
  }
});

module.exports = HomePage;
