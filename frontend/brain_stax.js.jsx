var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
// var SubjectForm = require('./components/SubjectForm');
// var SubjectList = require('./components/subject_list');
// var Subject = require('./components/subject');

var SubjectNav = require('./components/subjectnav');
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
    <IndexRoute component={SubjectNav}/>

    <Route path='users/:id' component={UserShow}/>

  </Route>
);
//
// var routes2 = (
//   <Route path='mysubjects' component={SubjectList}>
//     <Route path=':id' component={Subject}/>
//   </Route>
//
//   <Route path='new' component={SubjectForm}/>
// )



document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("content");
  ReactDOM.render(<Router>
    {routes}
  </Router>, root);
});
