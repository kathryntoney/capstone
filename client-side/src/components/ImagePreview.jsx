import React, {useState} from 'react'
import PropTypes from 'prop-types';
import MenuReader from './MenuReader';

export const ImagePreview = ({ dataUri, isFullscreen }) => {
    let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
    // const [dataUri, setDataUri] = useState({dataUri})
    const [interpret, setInterpret] = useState(false)
// const handleRetake = () => { 
//     setDataUri("")
    
//  }
const handleSubmit =(dataUri)=>{
    setInterpret(true)
}

    return (
        <div>
      <div className={'demo-image-preview ' + classNameFullscreen}>
        <img src={dataUri} />

        {/* <button onClick={handleRetake}>Try again</button> */}
        <button onClick={handleSubmit}>Use this pic</button>
      </div>

      {/* <div>{
        <div>
        (interpret == true)?
            <MenuReader dataUri={dataUri}/>
        </div>
    }:
      </div> */}
      </div>
    );
  };
  
  ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
  };
  
  export default ImagePreview;