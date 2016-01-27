var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var root = document.getElementById("content");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>BrainSTAX</h1></header>
        <p>
          Hello World!
        </p>
      </div>
    );
  }
});

ReactDOM.render(<App/>, root);
