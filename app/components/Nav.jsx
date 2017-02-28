var React = require('react');
var {Link, IndexLink} = require('react-router')


var Nav = React.createClass({


  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Photo Gallery</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Photos</IndexLink></li>
            <li><Link to="/NASAfunfacts" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Fun Facts from NASA</Link></li>
          </ul>
        </div>

        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">Created by <a href="https://github.com/kccarr" target="_blank">Kevin Carr</a></li>
            </ul>
        </div>

      </div>
    );
  }
})

module.exports = Nav;
