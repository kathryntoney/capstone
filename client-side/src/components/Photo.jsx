import React, { useState } from 'react';
import Camera, {IMAGE_TYPES, FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
// import Menu from './components/Menu';
import MenuReader from './MenuReader';



function Photo (props) {
  const [dataUri, setDataUri] = useState('');
 

  
 
  function handleTakePhotoAnimationDone (dataUri) {
    setDataUri(dataUri);
 
    console.log('takePhoto' );


  }
const handleRetake = () => { 
    setDataUri("")
    
 }
 const isFullscreen = false;
  return  (
    <div>
      {
        (dataUri)
          ?<div> <ImagePreview dataUri={dataUri}
          isFullscreen={isFullscreen}
          />
           <button onClick={handleRetake}>Try again</button>
        {/* <button onClick={handleSubmit}>Use this pic</button> */}
        <div><MenuReader dataUri={dataUri}/>

</div>
          </div>
         
          : <Camera  onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
          isFullscreen={isFullscreen}
            imageType = {IMAGE_TYPES.JPG}
            imageCompression = {0.97}
            isMaxResolution = {true}
            idealFacingMode = {FACING_MODES.ENVIRONMENT}
            // idealResolution = {{width: 350, height: 800}}

          />
      }
    
    </div>
  );
}

export default Photo