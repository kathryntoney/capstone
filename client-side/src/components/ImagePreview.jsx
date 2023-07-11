import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../assets/imagePreview.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input'
import Typography from '@mui/material/Typography'
import MenuReader from './MenuReader';
const ariaLabel = { 'aria-label': 'description' };

export const ImagePreview = ({ dataUri }) => {
  const [dish, setDish] = useState('')
const navigate = useNavigate()

const handleSubmit = () => { 
  navigate('/suggestions')
}
  // let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';
    return (
     <div>

    
 <Card className='demo-image-preview' sx={{ maxWidth: "100vw", height:"75vh" }}>
 <CardMedia
   component="img"
   alt="image preview"
   height="100%"
   image={dataUri}
 />
  <CardActions>
  <Button  variant='contained' aria-label='outlined primary button group' onClick={handleSubmit}>Keep</Button>
  </CardActions>

   {/* <CardContent>
    <Typography>What dish would you like to pair?</Typography>
    <br/>
   <Input placeholder="Input dish" inputProps={ariaLabel} onChange={(e)=>setDish(e.target.value)}/>
    <Button onClick={handleSubmit}  variant='contained' aria-label='outlined primary button group' >submit</Button>

   </CardContent> */}
</Card>
{/* {
  (dish)?
<div><MenuReader dataUri={dataUri} dish={dish} /></div>:
<div></div>
} */}
</div> 
    );
  };
  
  ImagePreview.propTypes = {
    dataUri: PropTypes.string,
    isFullscreen: PropTypes.bool
  };
  
  export default ImagePreview;