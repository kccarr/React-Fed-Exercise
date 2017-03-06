var React = require('react');

var PhotoFilterSearch = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strInput = this.refs.photoTag.value;

    if(!strInput) {
      this.refs.seconds.value = '';
      this.props.onSetPhotoTag(parseInt(strSeconds, 10));
    }
  },
  render: function() {
 //    <div class="row">
 //   <div class="large-12 columns">
 //     <div class="row collapse">
 //       <div class="small-10 columns">
 //         <input type="text" placeholder="Hex Value">
 //       </div>
 //       <div class="small-2 columns">
 //         <a href="#" class="button postfix">Go</a>
 //       </div>
 //     </div>
 //   </div>
 // </div>

    return (
      <div className="filterSettings">
        <form ref="form" onSubmit={this.onSubmit} className="filter-form">
          <div className="row">
            <div className="large-11 columns">
              <div className="row collapse">
                <div className="small-7 large-offset-1 columns">
                  <input type="text" ref="photoTag" placeholder="Choose a photo category"/>
                </div>
                <div className="buttonGroup">
                  <div className="blueButton small-2 columns">
                    <button className="button expanded"><span>Add Category</span></button>
                  </div>
                  <div className="redButton small-2 columns">
                    <button className="button expanded alert"><span>Clear Category</span></button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </form>
      </div>
    );
  }
});

module.exports = PhotoFilterSearch;
