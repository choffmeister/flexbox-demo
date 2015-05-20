var React = require('react'),
    ReactRouter = require('react-router'),
    RestClient = require('../services/RestClient');

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <div id="header">
          <a id="brand" href="#">flexbox-demo</a>
          <div id="navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
            </ul>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </div>
        </div>
        <div id="middle">
          <div id="sidebar">
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
            <div>foobar</div>
          </div>
          <div id="main">
            <ReactRouter.RouteHandler data={this.props.data}/>
          </div>
        </div>
        <div id="footer">
          &copy; 2015 Christian Hoffmeister
        </div>
      </div>
    );
  }
});

module.exports = App;
