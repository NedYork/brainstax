var React = require('react');
var Modal = require('react-modal');

var ApiUtil = require('../../util/api_util');
// var Navbar = require('../nav/home_page_nav');
var Footer = require('../footer/footer');
var SessionForm = require('./home_login');
var HomePageSignUp = require('./home_page_sign_up');



var HomePage = React.createClass({
  getInitialState: function() {
    return { loginModal: false, getStarted: false };
  },

  toggleLogin: function() {
    this.setState({loginModal: true});
  },

  getStartedModal: function() {
    this.setState({getStarted: true});
  },

  afterOpenModal: function() {
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({ loginModal: false, getStarted: false });
  },

  render: function () {
    return (
      <main className="home-page">
        <header className="header">
          <nav className="header-nav group">

            <div className="header-logo">
              <a href="#"><img src={window.images.logo}/></a>
            </div>

            <ul className="header-begin group">
              <li><a onClick={this.toggleLogin}>Login</a></li>
              <li><a onClick={this.getStartedModal} className="get-started">Get Started</a></li>
            </ul>

          </nav>
        </header>

        <Modal
          isOpen={this.state.loginModal}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <SessionForm></SessionForm>
        </Modal>

        <Modal
          isOpen={this.state.getStarted}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}>
          <HomePageSignUp></HomePageSignUp>
        </Modal>

        {/*home body*/}
        <div className="background">
          <div className="welcome">
            <h1>The <i>Ultimate</i> Learning Accelerator</h1>
            <hr></hr>
            <h2>Maximize your return with our <i>dynamic-sequence technology</i>.</h2>
          </div>
        </div>

        {this.props.children}
        <Footer></Footer>
      </main>
    );
  }
});

var customStyles = {
    overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)'
  },
  content : {
    position                   : 'absolute',
    top                        : '30%',
    left                       : '24%',
    border                     : 'none',
    background                 : 'none',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    height                     : '290px',
    width                      : '200px',
  }
};


module.exports = HomePage;
