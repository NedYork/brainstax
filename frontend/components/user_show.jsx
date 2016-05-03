var React = require('react');
var UserStore = require('../stores/user');
var ApiUtil = require('../util/api_util');
var SubjectList = require('./subjects/subject_list');
var SubjectStore = require('../stores/subject_store');
var SubjectNav = require('./subjects/subject_nav');
var SubjectDetail = require('./subjects/subject_detail');
var Navbar = require('./nav/logged_in_nav');
var Footer = require('./footer/footer');

var CurrentUserStore = require('../stores/current_user_store');

module.exports = React.createClass({
  getInitialState: function() {
    return { user: CurrentUserStore.currentUser, subject: null };
  },

  changeSubjectAndPopulateDeck: function(id) {
    var that = this;
    return function() {
      ApiUtil.fetchSingleSubject(id, function () {
        that.setState({subject: SubjectStore.find(id)});
      });
      ApiUtil.fetchDecks(id);
    };
  },

  render: function() {
    return (
      <div>
        <Navbar addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} removeAllSteps={this.props.removeAllSteps} user={this.state.user}></Navbar>
        <SubjectNav changeSubjectAndPopulateDeck={this.changeSubjectAndPopulateDeck} addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} subjects={this.state.user.subjects} />
        <SubjectDetail addSteps={this.props.addSteps} addTooltip={this.props.addTooltip} removeAllSteps={this.props.removeAllSteps} subject={this.state.subject}/>
      </div>
    );
  }
});
