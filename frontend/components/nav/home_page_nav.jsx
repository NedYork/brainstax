var React = require('react');
var CurrentUserStore = require('../../stores/current_user_store');
var LoginModal = require('../session/login_modal');

var Navbar = React.createClass({
  render: function() {
    return (
      <header className="header">
        <nav className="header-nav group">

          <div className="header-logo">
            <a href="#"><img src="https://www.brainscape.com/assets/logo.svg"/></a>
          </div>

          <ul className="header-list group">
            <li>
              <a href="#">How it Works</a>
            </li>
            <li><a href="#">Flashcards</a></li>
            <li><a href="#">Educators</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
          </ul>

          <ul className="header-begin group">
            <li><a href="/#/login" >Login</a></li>
            <li><a href="//new" className="get-started">Get Started</a></li>
          </ul>

        </nav>
      </header>

    );
  }
});

module.exports = Navbar;
