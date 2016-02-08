var React = require('react');
var CurrentUserStore = require('../../stores/current_user_store');
var LoginModal = require('../session/login_modal');

var Navbar = React.createClass({
  toggleLogin: function() {
    document.getElementsByClassName('flipper')[0].classList.toggle('toggle-login');
  },
  render: function() {
    return (
      <header className="header">
        <nav className="header-nav group">

          <div className="header-logo">
            <a href="#"><img src={window.images.logo}/></a>
          </div>

          <ul className="header-list group">
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Flashcards</a></li>
            <li><a href="#">Educators</a></li>
            <li><a href="#">About</a></li>
          </ul>

          <ul className="header-begin group">
            <li><a onClick={this.toggleLogin}>Login</a></li>
            <li><a onClick={this.toggleLogin} className="get-started">Get Started</a></li>
          </ul>

        </nav>
      </header>
    );
  }
});

module.exports = Navbar;
