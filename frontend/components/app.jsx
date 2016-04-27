var React = require('react'),
    SessionsApiUtil = require('./../util/sessions_api_util'),
    CurrentUserStore = require("./../stores/current_user_store");
var Joyride = require('react-joyride');

var App = React.createClass({
  getInitialState: function() {
    return {
      joyrideOverlay: true,
      joyrideType: 'continuous',
      ready: false,
      steps: []
    };
  },

  componentDidMount: function () {
    CurrentUserStore.addListener(this.forceUpdate.bind(this));
    SessionsApiUtil.fetchCurrentUser();
    setTimeout(function() {
      this.setState({
        ready: true
      });
    }.bind(this), 1000);
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (!prevState.ready && this.state.ready) {
      this.refs.joyride.start();
    }
  },

  addSteps: function (steps) {
    var joyride = this.refs.joyride;

    if (!Array.isArray(steps)) {
        steps = [steps];
    }

    if (!steps.length) {
        return false;
    }

    this.setState(function(currentState) {
        currentState.steps = currentState.steps.concat(joyride.parseSteps(steps));
        return currentState;
    });

  },

  addTooltip: function (data) {
      this.refs.joyride.addTooltip(data);
  },


  stepCallback: function(step) {
    console.log('%cStep Callback', 'color: #2B759E; font-weight: bold', step); //eslint-disable-line no-console
  },

  completeCallback: function(steps, skipped) {
    console.log('%ccompleteCallback', 'color: #519255; font-weight: bold', steps, skipped); //eslint-disable-line no-console
  },

  onClickSwitch: function(e) {
    e.preventDefault();
    var el = e.currentTarget;
    var state = {};

    if (el.dataset.key === 'joyrideType') {
      this.refs.joyride.reset();

      setTimeout(function() {
        this.refs.joyride.start();
      }.bind(this), 300);

      state.joyrideType = e.currentTarget.dataset.type;
    }

    if (el.dataset.key === 'joyrideOverlay') {
      state.joyrideOverlay = el.dataset.type === 'active';
    }

    this.setState(state);
  },


  render: function() {
    var state = this.state;

    return (
      <div>
        <Joyride
          ref="joyride"
          debug={false}
          steps={state.steps}
          type={state.joyrideType}
          showSkipButton={true}
          showOverlay={state.joyrideOverlay}
          stepCallback={this.stepCallback}
          completeCallback={this.completeCallback} />
        {React.cloneElement(this.props.children, { addSteps: this.addSteps, addTooltip: this.addTooltip })}
      </div>
    );
  }

});

module.exports = App;
