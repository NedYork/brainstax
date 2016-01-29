var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var SubjectList = require('./subject_list');
var SubjectNav = require('./subjectnav');

module.exports = React.createClass({
  getInitialState: function() {
    return {user: UserStore.find(this.props.params.id)};
  },
  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.updateState);
    ApiUtil.fetchUser(this.props.params.id);
  },
  componentWillUnmount: function() {
    this.userListener.remove();
  },
  componentWillReceiveProps: function(newProps) {
    console.log("in componentWillReceiveProps");
    if (!UserStore.find(newProps.params.id)) {
      ApiUtil.fetchUser(newProps.params.id);
    }
    this.setState({user: UserStore.find(newProps.params.id)});
  },
  updateState: function() {
    this.setState({ user: UserStore.find(this.props.params.id)});
  },
  render: function() {
    // console.log(this.props)
    // console.log("in render. id = " + this.props.params.id);
    // console.log("in render. user = ", this.state.user);

    if (!this.state.user) { return <div></div>; }
    return <SubjectList subjects={this.state.user.subjects} />;
  }
});
