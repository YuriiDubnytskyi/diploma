import React from 'react';
import ImageGallery from 'react-image-gallery';
import './ProductGallery.css'

class App extends React.Component {

  	constructor(props) {
		super(props);
		this.state = {
			showIndex: false,
			showBullets: true,
			infinite: true,
			showThumbnails: true,
			showFullscreenButton: true,
			showGalleryFullscreenButton: true,
			showPlayButton: false,
			showGalleryPlayButton: false,
			showNav: true,
			isRTL: false,
			slideDuration: 450,
			slideOnThumbnailOver: false,
			thumbnailPosition: 'left',
		};
		this.images = props.images.map((el,i)=>{ return {original:el,thumbnail:el} })
	}

	_handleInputChange(state, event) {
		this.setState({[state]: event.target.value});
	}

	_handleCheckboxChange(state, event) {
		this.setState({[state]: event.target.checked});
	}

	_handleThumbnailPositionChange(event) {
		this.setState({thumbnailPosition: event.target.value});
	}



  render() {
    return (

      <section className='app'>
        <ImageGallery
            ref={i => this._imageGallery = i}
            items={this.images}
            lazyLoad={false}
            infinite={this.state.infinite}
            showBullets={this.state.showBullets}
            showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
            showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            isRTL={this.state.isRTL}
            thumbnailPosition={this.state.thumbnailPosition}
            slideDuration={parseInt(this.state.slideDuration)}
            slideInterval={parseInt(this.state.slideInterval)}
            slideOnThumbnailOver={this.state.slideOnThumbnailOver}
            additionalClass="app-image-gallery"
        />

      </section>
    );
  }
}
export default App