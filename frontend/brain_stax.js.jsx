var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var SubjectDetail = require('./components/subjects/subject_detail');
var StudyShow = require('./components/study/study_show');
var SessionForm = require('./components/session/new');
var SubjectNav = require('./components/subjects/subject_nav');
var UserShow = require('./components/user_show');
var App = require('./components/app');
var CurrentUserStore = require('./stores/current_user_store');
var HomePage = require('./components/home_page/home_page');
var SessionsApiUtil = require('./util/sessions_api_util');



function _ensureLoggedIn(nextState, replace, callback) {
  if (CurrentUserStore.userHasBeenFetched()) {
    _redirectIfNotLoggedIn(); // this function below
  } else {
    SessionsApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  }

  function _redirectIfNotLoggedIn() {
    if (!CurrentUserStore.isLoggedIn()) {
      replace({}, "/home");
    }
    callback();
  }
};

var routes = (
  <Router>
    <Route path='/' component={ App }>
      <IndexRoute component={ UserShow } onEnter={ _ensureLoggedIn }/>
      <Route path="home" component={ HomePage }/>
      <Route path="login" component={ SessionForm }/>
      <Route path="user/:id" component={ UserShow } onEnter={ _ensureLoggedIn }/>

      <Route path='subject' component={ UserShow }>
        <Route path=':id' component={ SubjectDetail }/>
      </Route>

      <Route path='deck/:id' component={ StudyShow }/>
      </Route>
  </Router>
);



document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("content");
  ReactDOM.render(routes, root);
});
