var React = require('react');
var CurrentUserStore = require('../../stores/current_user_store');
var SessionsApiUtil = require('../../util/sessions_api_util');

var Navbar = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    SessionsApiUtil.logout(function () {
    this.history.pushState({}, "/");
  }.bind(this));
  },
  render: function() {
    return (
      <header className="header">
        <nav className="user-header-nav group">

          <div className="user-header-logo">
            <a href="#"><img src="https://www.brainscape.com/assets/logo.svg"/></a>
          </div>


          <ul className="user-header-list group">
            <li>
              <a href="#"> <i className="fa fa-database fa-lg"></i> My Library</a>
            </li>
            <li><a href="#"><i className="fa fa-search fa-lg"></i> Search Stacks</a></li>
            <li><a href="#"><i className="fa fa-area-chart fa-lg"></i> How It Works</a></li>
            <li><a href="#"><i className="fa fa-info-circle fa-lg"></i> About</a></li>
            <li><a href="#"><i className="fa fa-comment-o fa-lg"></i> Blog</a></li>
          </ul>

          <div className="user-header-profile">
            <h3>
              {this.props.user.username}


              <button onClick={ this.handleSubmit }>
                LogOut
                <i className="fa fa-caret-down"></i>
              </button>

            </h3>
            <a href="#"><img src="http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/001/023/original/edward-he.jpg?1449089662"/></a>
          </div>

        </nav>
      </header>

    );
  }
});

module.exports = Navbar;
