var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var SubjectDetail = require('./components/subjects/subject_detail');
var StudyShow = require('./study/study_show');

var SubjectNav = require('./components/subjects/subjectnav');
var UserShow = require('./components/user_show');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>brainSTAX</h1></header>
        {this.props.children};
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={UserShow}/>

    <Route path='subjects' component={UserShow}>
      <Route path=':id' component={SubjectDetail}/>
      <Route path='decks/:id' component={StudyShow}>
    </Route>


  </Route>
);



document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("content");
  ReactDOM.render(<Router>
    {routes}
  </Router>, root);
});
