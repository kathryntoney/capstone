import React, {useState} from 'react'
import PropTypes from 'prop-types';
import '../assets/imagePreview.css'

export const ImagePreview = ({ dataUri }) => {
  // let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
    return (
        <div className={'demo-image-preview '} >
      
        <img   src={dataUri} />

        
      </div>
    );
  };
  
  ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
  };
  
  export default ImagePreview;