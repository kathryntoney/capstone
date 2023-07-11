import React, { useState } from 'react'
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import { AppBar, Toolbar, Typography, Box, InputBase, Avatar, Badge, Menu, MenuItem } from '@mui/material'
import MenuReader from './MenuReader';
import '../assets/photo.css'
const Photo = (props) => {
  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);

    console.log('takePhoto');


  }

  const handleRetake = () => { 
    setDataUri("")

 }
  // const isFullscreen = false
  return (
    <>
      {
        (dataUri)
          ? <Box >
            <ImagePreview dataUri={dataUri} />
            <button onClick={handleRetake}>Try again</button>
            <div><MenuReader dataUri={dataUri}/></div>
          </Box>
          : <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={false}
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