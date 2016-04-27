var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var SubjectList = require('./subjects/subject_list');
var SubjectNav = require('./subjects/subject_nav');
var Navbar = require('./nav/logged_in_nav');
var Footer = require('./footer/footer');

module.exports = React.createClass({
  getInitialState: function() {
    // return {user: UserStore.find(this.props.params.id)};
    return { user: 9 };
  },

   componentDidMount: function() {
     var steps = [
       {
         title: 'Your subjects',
         text: 'You can select your favorite subject here to reveal its decks.',
         selector: '.subject-nav',
         position: 'top',
         type: 'click'
       }
     ];
     this.props.addSteps(steps);
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
    } else {
      return (
        <div>
          <Navbar addSteps={this.addSteps} addTooltip={this.addTooltip} user={this.state.user}></Navbar>
          <SubjectNav addSteps={this.addSteps} addTooltip={this.addTooltip} subjects={this.state.user.subjects} />
          {React.cloneElement(this.props.children, { addSteps: this.addSteps, addTooltip: this.addTooltip })}
        </div>
      );
    }
  }
});
