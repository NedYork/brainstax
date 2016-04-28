var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var SubjectList = require('./subjects/subject_list');
var SubjectStore = require('../stores/subject_store');
var SubjectNav = require('./subjects/subject_nav');
var SubjectDetail = require('./subjects/subject_detail');
var Navbar = require('./nav/logged_in_nav');
var Footer = require('./footer/footer');

module.exports = React.createClass({
  getInitialState: function() {
    // return {user: UserStore.find(this.props.params.id)};
    return { user: 9, subject: null };
  },

  changeSubject: function(id) {
    var that = this;
    return function() {
      ApiUtil.fetchSingleSubject(id, function () {
        that.setState({subject: SubjectStore.find(id)});
      });
    };
  },



  // componentDidMount: function() {
  //   this.userListener = UserStore.addListener(this.updateState);
  //   ApiUtil.fetchUser(this.props.params.id);
  // },
  // componentWillUnmount: function() {
  //   this.userListener.remove();
  // },
  // componentWillReceiveProps: function(newProps) {
  //   console.log("in componentWillReceiveProps");
  //   if (!UserStore.find(newProps.params.id)) {
  //     ApiUtil.fetchUser(newProps.params.id);
  //   }
  //   this.setState({user: UserStore.find(newProps.params.id)});
  // },
  // updateState: function() {
  //   this.setState({ user: UserStore.find(this.props.params.id)});
  // },
  render: function() {
    if (!this.state.user) {
      return <div></div>;
    }
    return (
      <div>
        <Navbar addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} user={this.state.user}></Navbar>
        <SubjectNav changeSubject={this.changeSubject} addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} subjects={this.state.user.subjects} />
        <SubjectDetail subject={this.state.subject}/>

        {this.props.children}
      </div>
    );
  }
});
