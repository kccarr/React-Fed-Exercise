var React = require('react');
var Nav = require('Nav');
var PhotoGallery = require('PhotoGallery');
var PhotoFilterSearch = require('PhotoFilterSearch');


var Main = (props) => {
  return (
    <div className="row">
      <Nav/>
      {/* <div className="column small-centered medium-6 large-4"> */}
        <PhotoFilterSearch />
        <PhotoGallery />
        {props.children}
      {/* </div> */}
    </div>
  );
};

module.exports = Main;
