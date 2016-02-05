var React = require("react");
var History = require("react-router").History;

var Footer = React.createClass({
  mixins: [History],

  goToHome: function () {
    this.history.pushState(null, "/");
  },

  render: function () {
    return (
      <footer className="footer">
        <section className="footer-wrapper container">
          <ul className="footer-nav">
            <a className="logo" onClick={ this.goToHome }>BrainSTAX</a>
          </ul>

          <ul className="footer-nav">
            <h5>COMPANY</h5>
            <li><a>About</a></li>
            <li><a>Careers</a></li>
            <li><a>Press</a></li>
          </ul>

          <ul className="footer-nav">
            <h5>LEARN</h5>
            <li><a>How It Works</a></li>
            <li><a>Educators</a></li>
            <li><a>Blog</a></li>
          </ul>

          <ul className="footer-nav">
            <h5>CONNECT</h5>
            <li>
              <a target="_blank" href="https://github.com/NedYork">
                GitHub
              </a>
            </li>

            <li>
              <a target="_blank" href="https://www.linkedin.com/in/edward-he-3423b5b8">
                LinkedIn
              </a>
            </li>

            <li>
              <a target="_blank" href="">
                Blog
              </a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
});

module.exports = Footer;
