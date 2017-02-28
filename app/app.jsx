var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var PhotoGallery = require('PhotoGallery');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}></Route>
  </Router>
  document.getElementById('app')
);
