import React, { useState } from 'react'
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';


const Photo = (props) => {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);

    console.log('takePhoto');


  }
  const isFullscreen = false
  return (
    <>
      {
        (dataUri)
          ? <div>
            <ImagePreview dataUri={dataUri} />
          </div>
          : <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
            imageType={IMAGE_TYPES.JPG}
            imageCompression={0.97}
            isMaxResolution={true}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            idealResolution={{ width: 390, height: 844 }}

          />

      }




    </>
  )
}

export default Photo