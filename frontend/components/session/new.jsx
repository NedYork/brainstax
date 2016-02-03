var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Navbar = require('../nav/home_page_nav');
var Footer = require('../footer/footer');
var SessionForm = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function() {
    return { username: '', password: '' };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    SessionsApiUtil.login(this.state, function () {
    this.history.pushState({}, "/user/:id");
  }.bind(this));
  },

  loginDemoUser: function (e) {
    e.preventDefault();
    var demoUser = { username: "JSAddict", password: "123456" };
    SessionsApiUtil.login(demoUser, function () {
    this.history.pushState({}, "/user/:id");
  }.bind(this));
  },


  render: function() {

    return (
      <div>
        <Navbar></Navbar>
        <form onSubmit={ this.handleSubmit }>

          <h1>Login</h1>

          <div>
            <label>Username</label>
              <input
                valueLink={this.linkState('username')}
                type="text"
                name="username"
                placeholder="Username" />
          </div>


          <div>
            <label>Password</label>
              <input
                valueLink={this.linkState('password')}
                type="password"
                name="password"
                placeholder="******" />
          </div>


          <button>Sign In</button>
          <button onClick={this.loginDemoUser}>Sign In As Demo User </button>
        </form>
        <Footer></Footer>
      </div>
    );
  },

});

module.exports = SessionForm;
