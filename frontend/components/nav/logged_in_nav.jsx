var React = require('react');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');
var SessionsApiUtil = require('../../util/sessions_api_util');


var Navbar = React.createClass({
  mixins: [History],

  handleSubmit: function (e) {
    e.preventDefault();
    SessionsApiUtil.logout(function () {
      this.history.pushState(null, "/");
    }.bind(this));
  },
  render: function() {

          // <ul className="user-header-list group">
          //   <li><a href="#"><i className="fa fa-search fa-lg"></i> Search Stacks</a></li>
          // </ul>
    return (
      <header className="header">
        <nav className="user-header-nav group">

          <div className="user-header-logo">
            <a href="#"><img src={window.images.logo}/></a>
          </div>

          <div className="user-header-profile">
            <h3>
              {this.props.user.username}
              <button onClick={ this.handleSubmit }>
                Log Out
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
