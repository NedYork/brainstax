var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var root = document.getElementById("content");

var App = React.createClass({
  render: function() {
    return this.props.children;
  }
});

var routes = (
  <Router>
    <Route path='/' component={App}>
      <IndexRoute component={SubjectForm}/>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App/>, root);
});
