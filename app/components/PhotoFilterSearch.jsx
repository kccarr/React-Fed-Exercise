var React = require('react');

var PhotoFilterSearch = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strInput = this.refs.photoTag.value;

    if(!strInput) {
      this.refs.photoTag.value = '';
      this.props.onSetPhotoTag(strInput);
    }
  },

  onClearSearch: function(e) {
    e.preventDefault();
    this.refs.photoTag.value = '';
  },
  render: function() {


    return (
      <div className="filterSettings">
          <div className="row">
            <div className="large-11 columns">
              <div className="row collapse">
                <form ref="form" onSubmit={this.onSubmit}>
                  <div className="small-7 large-offset-1 columns">
                    <input type="text" ref="photoTag" placeholder="Choose a photo category"/>
                  </div>
                  {/* <div className="buttonGroup"> */}
                    <div className="blueButton small-2 columns">
                      <button className="button expanded">Add Category</button>
                    </div>
                </form>
                  <div className="redButton small-2 columns">
                    <button className="button expanded alert" onClick={this.onClearSearch}>Clear Category</button>
                  </div>
                {/* </div> */}

              </div>
            </div>
          </div>
      </div>
    );
  }
});

module.exports = PhotoFilterSearch;
