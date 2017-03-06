// var React = require('react');
// var ReactDOM = require('react-dom');
// var $ = require('jquery');
// var _ = require('lodash');
//
//
//
// class GalleryContainer extends React.Component {
// 	render() {
// 		// Create tile for each item in data array
// 		// Pass data to each tile and assign a key
//     var data = [];
//     var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + this.props.searchTag + "&format=json";
//     $.ajax({
//       url: url,
//       dataType: 'jsonp',
//       jsonpCallback: 'jsonFlickrApi',
//       cache: false,
//       success: function(res) {
//
//       res.items.forEach(function(obj,i,array){
//             data.push({
//                 image: obj.media.m,
//                 title: obj.title
//               })
//       })
//     }
//   });
//
//   this.setState(data: data);
//
// 		return (
// 			<div className="tiles">
// 				{this.state.data.map((data) => {
// 					return <Tile data={data} key={data.id} />
// 				})}
// 			</div>
// 		);
// 	}
// }
//
// class Tile extends React.Component {
// 	constructor(props) {
// 			super(props);
// 			this.state = {
// 				open: false,
// 				mouseOver: false
// 			};
// 			// Bind properties to class instance
// 			this._clickHandler = this._clickHandler.bind(this);
// 			this._mouseEnter = this._mouseEnter.bind(this);
// 			this._mouseLeave = this._mouseLeave.bind(this);
// 		}
// 		// Event handlers to modify state values
// 	_mouseEnter(e) {
// 		e.preventDefault();
// 		if (this.state.mouseOver === false) {
// 			console.log(this.props.data.name);
// 			this.setState({
// 				mouseOver: true
// 			})
// 		}
// 	}
// 	_mouseLeave(e) {
// 		e.preventDefault();
// 		if (this.state.mouseOver === true) {
// 			this.setState({
// 				mouseOver: false
// 			})
// 		}
// 	}
// 	_clickHandler(e) {
// 		e.preventDefault();
// 		if (this.state.open === false) {
// 			this.setState({
// 				open: true
// 			});
// 		} else {
// 			this.setState({
// 				open: false
// 			});
// 		}
// 	}
//
// 	render() {
// 		// Modify styles based on state values
// 		let tileStyle = {};
// 		let headerStyle = {};
// 		let zoom = {};
// 		// When tile clicked
// 		if (this.state.open) {
// 			tileStyle = {
// 				width: '62vw',
// 				height: '62vw',
// 				position: 'absolute',
// 				top: '50%',
// 				left: '50%',
// 				margin: '0',
// 				marginTop: '-31vw',
// 				marginLeft: '-31vw',
// 				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
// 				transform: 'none'
// 			};
// 		} else {
// 			tileStyle = {
// 				width: '18vw',
// 				height: '18vw'
// 			};
// 		}
//
// 		return (
// 			<div className="tile">
// 				<img
// 					onMouseEnter={this._mouseEnter}
// 					onMouseLeave={this._mouseLeave}
// 					onClick={this._clickHandler}
// 					src={this.props.data.image}
// 					alt={this.props.data.name}
// 					style={tileStyle}
// 				/>
// 			</div>
// 		);
// 	}
// }
//
// module.exports = GalleryContainer;
//
//
//
//
//
//
// // // const app = document.getElementById('app');
// //
// // // var searchTag = this.props.photoTag || 'nasa';
// //
// // // const url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + searchTag + "&format=json"
// // // const data = [];
// //
// // // class App extends React.Component {
// // // 	render() {
// // // 		return (
// // // 			<Tiles data={this.props.data} />
// // // 		);
// // // 	}
// // // }
// //
// //
// //
// // class GalleryContainer extends React.Component {
// //   constructor(){
// //      super();
// //       this.state = {photos:null, pageNum:1, totalPages:1, loadedAll: false, currentImage:0};
// //       this.handleScroll = this.handleScroll.bind(this);
// //       this.loadMorePhotos = this.loadMorePhotos.bind(this);
// //       this.searchTags = this.state.searchTags;
// //
// //     }
// //     componentDidMount() {
// //         this.loadMorePhotos();
// //         this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
// //         window.addEventListener('scroll', this.handleScroll);
// //     }
// //     handleScroll(){
// //         let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
// //         if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
// //             this.loadMorePhotos();
// //         }
// //     }
// //     loadMorePhotos(e){
// //         if (e){
// //             e.preventDefault();
// //         }
// //     if (this.state.pageNum > this.state.totalPages){
// //         this.setState({loadedAll: true});
// //         return;
// //   }
// //   var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=" + this.props.searchTag + "&format=json";
// //         $.ajax({
// //           url: url,
// //           dataType: 'jsonp',
// //           jsonpCallback: 'jsonFlickrApi',
// //           cache: false,
// //           success: function(data) {
// //           let photos = [];
// //           data.items.forEach(function(obj,i,array){
// //                 photos.push({
// //                     image: obj.media.m,
// //                     title: obj.title
// //     });
// //       })
// //       this.setState({
// //         photos: this.state.photos ? this.state.photos.concat(photos) : photos,
// //         pageNum: this.state.pageNum + 1,
// //         totalPages: data.photos.pages
// //       });
// //           }.bind(this),
// //           error: function(xhr, status, err) {
// //             console.error(status, err.toString());
// //           }.bind(this)
// //         });
// //   }
// //
// //
// //   render(){
// //
// //     return (
// // 			<div className="tiles">
// // 				{this.state.photos.map((photos) => {
// // 					return <Tile data={photos} />
// // 				})}
// // 			</div>
// // 		);
// //
// //       }
// //
// //   };
// //
// //
// //
// // class Tile extends React.Component {
// // 	constructor(props) {
// // 			super(props);
// // 			this.state = {
// // 				open: false,
// // 				mouseOver: false
// // 			};
// // 			// Bind properties to class instance
// // 			this._clickHandler = this._clickHandler.bind(this);
// // 			this._mouseEnter = this._mouseEnter.bind(this);
// // 			this._mouseLeave = this._mouseLeave.bind(this);
// // 		}
// // 		// Event handlers to modify state values
// // 	_mouseEnter(e) {
// // 		e.preventDefault();
// // 		if (this.state.mouseOver === false) {
// // 			console.log(this.props.photos.title);
// // 			this.setState({
// // 				mouseOver: true
// // 			})
// // 		}
// // 	}
// // 	_mouseLeave(e) {
// // 		e.preventDefault();
// // 		if (this.state.mouseOver === true) {
// // 			this.setState({
// // 				mouseOver: false
// // 			})
// // 		}
// // 	}
// // 	_clickHandler(e) {
// // 		e.preventDefault();
// // 		if (this.state.open === false) {
// // 			this.setState({
// // 				open: true
// // 			});
// // 		} else {
// // 			this.setState({
// // 				open: false
// // 			});
// // 		}
// // 	}
// //
// // 	render() {
// // 		// Modify styles based on state values
// // 		let tileStyle = {};
// // 		let headerStyle = {};
// // 		let zoom = {};
// // 		// When tile clicked
// // 		if (this.state.open) {
// // 			tileStyle = {
// // 				width: '62vw',
// // 				height: '62vw',
// // 				position: 'absolute',
// // 				top: '50%',
// // 				left: '50%',
// // 				margin: '0',
// // 				marginTop: '-31vw',
// // 				marginLeft: '-31vw',
// // 				boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
// // 				transform: 'none'
// // 			};
// // 		} else {
// // 			tileStyle = {
// // 				width: '18vw',
// // 				height: '18vw'
// // 			};
// // 		}
// //
// // 		return (
// // 			<div className="tile">
// // 				<img
// // 					onMouseEnter={this._mouseEnter}
// // 					onMouseLeave={this._mouseLeave}
// // 					onClick={this._clickHandler}
// // 					src={this.props.photos.image}
// // 					alt={this.props.photos.title}
// // 					style={tileStyle}
// // 				/>
// // 			</div>
// // 		);
// // 	}
// // }
// //
// //
// // module.exports = GalleryContainer;
// // // ReactDOM.render(
// // // 	<App photos={data} />,
// // // 	app
// // // );
