var React = require('react'),
    SessionsApiUtil = require('./../util/sessions_api_util'),
    CurrentUserStore = require("./../stores/current_user_store");

var App = React.createClass({

  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    // CurrentUserStore.addListener(function () {
    //   this.setState({})
    //   this.forceUpdate()
    // }.bind(this));
    SessionsApiUtil.fetchCurrentUser();
  },

  //  move into render
  // if (!CurrentUserStore.userHasBeenFetched()) {
  //   return <p>PLEASE WAIT</p>;
  //   }
  render: function() {


    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = App;
