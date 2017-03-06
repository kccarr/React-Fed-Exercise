var React = require('react');
var ReactDOM = require('react-dom');
var Gallery = require('react-photo-gallery');
var $ = require('jquery');
var _ = require('lodash');
var Measure = require('react-measure');
var Lightbox = require('react-images');


class PhotoGallery extends React.Component{
    constructor(){
	     super();
        this.state = {photos:null, pageNum:1, totalPages:1, loadedAll: false, currentImage:0};
      	this.handleScroll = this.handleScroll.bind(this);
      	this.loadMorePhotos = this.loadMorePhotos.bind(this);
      	this.closeLightbox = this.closeLightbox.bind(this);
      	this.openLightbox = this.openLightbox.bind(this);
      	this.gotoNext = this.gotoNext.bind(this);
      	this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      componentDidMount() {
          this.loadMorePhotos();
          this.loadMorePhotos = _.debounce(this.loadMorePhotos, 200);
          window.addEventListener('scroll', this.handleScroll);
      }
      handleScroll(){
        	let scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        	if ((window.innerHeight + scrollY) >= (document.body.offsetHeight - 50)) {
        	    this.loadMorePhotos();
        	}
      }
      loadMorePhotos(e){
          if (e){
              e.preventDefault();
          }
    	if (this.state.pageNum > this.state.totalPages){
    	    this.setState({loadedAll: true});
    	    return;
  	}
          $.ajax({
            url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=aed81473d9bd8782b33aa73797612285&user_id=24662369@N07&format=json&per_page=21&page='+this.state.pageNum+'&extras=url_m,url_c,url_l,url_h,url_o',
            dataType: 'jsonp',
            jsonpCallback: 'jsonFlickrApi',
            cache: false,
            success: function(data) {
  	        let photos = [];
  	        data.photos.photo.forEach(function(obj,i,array){
                  let aspectRatio = parseFloat(obj.width_o / obj.height_o);
  	              photos.push({
                      src: (aspectRatio >= 3) ? obj.url_c : obj.url_m,
                      width: parseInt(obj.width_o),
                      height: parseInt(obj.height_o),
                      caption: obj.title,
                      srcset:[
  			                  obj.url_m+' '+obj.width_m+'w',
                          obj.url_c+' '+obj.width_c+'w',
                          obj.url_l+' '+obj.width_l+'w',
                          obj.url_h+' '+obj.width_h+'w'
                      ]
  		});
  	    })
  	    this.setState({
      		photos: this.state.photos ? this.state.photos.concat(photos) : photos,
      		pageNum: this.state.pageNum + 1,
      		totalPages: data.photos.pages
  	    });
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(status, err.toString());
            }.bind(this)
          });
    }
    openLightbox(index, event){
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        });
    }
    closeLightbox(){
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious(){
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext(){
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    renderGallery(){
  	return(
  	    <Measure whitelist={['width']}>
  	    {
  		({ width }) => {
  		    var cols = 1;
  		    if (width >= 480){
  			cols = 2;
  		    }
  		    if (width >= 1024){
  			cols = 3;
  		    }
  		    return <Gallery photos={this.state.photos} cols={cols} onClickPhoto={this.openLightbox} />
  		}
  	    }
  	    </Measure>
  	   );
      }
    render(){
	// no loading sign if its all loaded
        console.log(this.state.photos);
        if (this.state.photos){
            return(
            		<div className="App">
                  <div className="large-11 large-centered columns">
                    <div className="row collapse">
            		    {this.renderGallery()}
                  </div>
                </div>
            		    <Lightbox
            			images={this.state.photos}
                                    backdropClosesModal={true}
                                    onClose={this.closeLightbox}
                                    onClickPrev={this.gotoPrevious}
                                    onClickNext={this.gotoNext}
                                    currentImage={this.state.currentImage}
                                    isOpen={this.state.lightboxIsOpen}
                                    width={1600}
                                />
            		    {!this.state.loadedAll && <div className="loading-msg" id="msg-loading-more">Loading...</div>}
            		</div>
            );
        }
        else{
            return(
            		<div className="App">
            			<div id="msg-app-loading" className="loading-msg">Loading...</div>
            		</div>
            );
        }
    }
};

module.exports = PhotoGallery;
