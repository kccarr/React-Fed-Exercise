var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var PhotoGallery = require('PhotoGallery');

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('app')
);



// ReactDOM.render(, document.getElementById('app'));
