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

  render: function() {

    return (
      <div className="home-signup">
        <form onSubmit={ this.handleSubmit }>
          <h1>Sign Up</h1>

          <div className="username">
            <label>Username
              <input
                valueLink={this.linkState('username')}
                type="text"
                name="username"
                placeholder="Username" />
            </label>
          </div>

          <div className="password">
            <label>Password
              <input
                valueLink={this.linkState('password')}
                type="password"
                name="password"
                placeholder="******" />
            </label>
          </div>

          <div className="password">
            <label>Password Confirm
              <input
                type="password"
                placeholder="******" />
            </label>
          </div>

          <button>Sign Up</button>
        </form>
      </div>
    );
  },

});

module.exports = HomePageSignUp;
