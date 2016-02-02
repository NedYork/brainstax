var React = require('react');

module.exports = React.createClass({
  render: function() {
    return(
      <div className="study-show-nav group">
        <div className="nav-panel group">
          <img className="nav-panel-logo" src="https://www.brainscape.com/assets/bsc_icon.svg"/>
          <ul className="panel-links">
            <li><a href="#"><i className="fa fa-search fa-lg"></i></a></li>
            <li><a href="#"><i className="fa fa-area-chart fa-lg"></i></a></li>
            <li><a href="#"><i className="fa fa-info-circle fa-lg"></i></a></li>
            <li><a href="#"><i className="fa fa-comment-o fa-lg"></i></a></li>
          </ul>
        </div>


        <div className="progress-panel group">

          <div className="mastery-header">
            Studying:
          </div>

          <a href="">Done</a>

          <div className="cards-left">
          </div>
        </div>
      </div>

    );
  }
})
;
