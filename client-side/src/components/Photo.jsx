import React, { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import Camera, { IMAGE_TYPES, FACING_MODES } from 'react-html5-camera-photo';
import ImagePreview from './ImagePreview';
import { AppBar, Toolbar, Card, CardMedia, Typography, Box, TextField, ButtonGroup,  InputBase, Avatar, Badge, Menu, MenuItem, Modal, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { addDataUri } from './auth/authSlice';
 import '../assets/photo.css'
const Photo = (props) => {
  const [dataUri, setDataUri] = useState('');
  const [open, setOpen] = useState(false)
const dispatch = useDispatch()
  useEffect(() => {
    setOpen(true)
  
    
  }, [])
  
  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
    console.log(dataUri, "datauri photo")
    dispatch(addDataUri({dataUri}))

    console.log('takePhoto');


  }

  const handleRetake = () => { 
    setDataUri("")

 }



  // const isFullscreen = false
  return (
    <>
    <Modal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={350} height={280} bgcolor="white" p={3} borderRadius={5}>
                   <CameraAltIcon fontSize='large'/>
                    <Typography variant='h5' color='gray' textAlign='center'>Picture Tips</Typography>
                  <TextField
                        sx={{ width: '100%' }}
                        id='standard-multiline-static'
                        rows={4}
                        variant='standard'
                    /> 
                    <p>Take a picture of <strong>one column</strong> of information</p>
                    <p>Steady the camera to minimize blur</p>
                    <p>Check you have adequate lighting</p>
                    <p>Avoid reflection or reflective surfaces</p>
                   
                   
                    <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
                        
                        <Button onClick={e => setOpen(false)}>Close</Button> 
                    </ButtonGroup> 
                </Box>
            </Modal>
      {
        (dataUri)
          ? <Box >
            <ImagePreview dataUri={dataUri} />
            <Button  variant='contained' aria-label='outlined primary button group' onClick={handleRetake}>Retake Photo</Button>
            <br/>
            
            {/* <div><MenuReader dataUri={dataUri}/></div> */}
          </Box> :<Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
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