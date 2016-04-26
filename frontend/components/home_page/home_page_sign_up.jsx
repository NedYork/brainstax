var React = require('react');
var History = require('react-router').History;
var SessionsApiUtil = require('./../../util/sessions_api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var Navbar = require('../nav/home_page_nav');
var Footer = require('../footer/footer');
var HomePageSignUp = React.createClass({
  mixins: [History, LinkedStateMixin],

  getInitialState: function() {
    return { username: '', password: '' };
  },

  handleSubmit: function (e) {
    e.preventDefault();

    ApiUtil.createUser(this.state);
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
      <div className="home-signup">
        <form onSubmit={ this.handleSubmit }>
          <h1>Sign Up</h1>

          <div className="username">

              <input
                valueLink={this.linkState('username')}
                type="text"
                name="username"
                placeholder="Username" />

          </div>

          <div className="password">

              <input
                valueLink={this.linkState('password')}
                type="password"
                name="password"
                placeholder="Password" />

          </div>

          <div className="password">

              <input
                type="password"
                placeholder="Password Confirm" />

          </div>

          <button>Sign Up</button>
        </form>
        <button onClick={this.loginDemoUser}>Demo</button>
      </div>
    );
  },

});

module.exports = HomePageSignUp;
