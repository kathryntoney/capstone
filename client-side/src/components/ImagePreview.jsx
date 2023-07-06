import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const ImagePreview = ({ dataUri }) => {
    
    return (
        <div  >
      
        <img style={{height:"70vh", margin:"2%", width:"95%"}}  src={dataUri} />

        
      </div>
    );
  };
  
  ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
  };
  
  export default ImagePreview;