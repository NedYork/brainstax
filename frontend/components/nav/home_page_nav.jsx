var React = require('react');
var Modal = require('react-modal');
var CurrentUserStore = require('../../stores/current_user_store');
var Menu = require('react-burger-menu').stack;

var Navbar = React.createClass({
  getInitialState: function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  toggleLogin: function() {
    document.getElementsByClassName('flipper')[0].classList.toggle('toggle-login');
    document.getElementsByClassName('home-login')[0].classList.toggle('highlight');
  },

  toggleGetStarted: function() {
    document.getElementsByClassName('flipper')[0].classList.toggle('toggle-login');
    document.getElementsByClassName('home-signup')[0].classList.toggle('highlight');
  },

  render: function() {
    return (
      <header className="header">
        <nav className="header-nav group">

          <div className="header-logo">
            <a href="#"><img src={window.images.logo}/></a>
          </div>

          {/*<ul className="header-list group">
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Flashcards</a></li>
            <li><a href="#">Educators</a></li>
            <li><a href="#">About</a></li>
          </ul>*/}

          <ul className="header-begin group">
            <li><a onClick={this.toggleLogin}>Login</a></li>
            {/*<li><a onClick={this.toggleGetStarted} className="get-started">Get Started</a></li>*/}
            <li><a onClick={this.openModal} className="get-started">Get Started</a></li>
          </ul>

        </nav>

        <Menu className="menu" right>
          <a className="menu-item" href="/">Home</a>
          <a className="menu-item" href="/about">About</a>
          <a className="menu-item" href="/contact">Contact</a>
        </Menu>
      </header>
    );
  }
});

module.exports = Navbar;
