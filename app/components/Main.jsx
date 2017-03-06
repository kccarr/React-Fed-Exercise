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

// var React = require('react');
// var Nav = require('Nav');
// // var PhotoGallery = require('PhotoGallery');
// var PhotoFilterSearch = require('PhotoFilterSearch');
// var GalleryContainer = require('GalleryContainer');
//
//
//
// var Main = React.createClass ({
//   getInitialState: function() {
//       return {
//         searchTags: 'nasa'
//       };
//     },
//
//   onSubmitTag: function(tag) {
//     this.setState({
//       searchTags: tag
//     })
//   },
//
//   componentDidUpdate: function(prevProps, prevState) {
//     if (this.state.searchTags !== prevState.searchTags) {
//       switch (this.state.searchTags) {
//         case '':
//           this.setState({searchTags: 'nasa'});
//           break;
//         default:
//           // this.setState({searchTags: ''});
//           break;
//       }
//     }
//   },
//
//   render: function() {
//     var {searchTags} = this.state;
//     return (
//       <div className="row">
//           <Nav/>
//           <PhotoFilterSearch onSetPhotoTag={this.onSubmitTag} />
//           <GalleryContainer data={this.state.searchTags} />
//           {/* {props.children} */}
//
//       </div>
//     );
//   }
// });
//
// module.exports = Main;
