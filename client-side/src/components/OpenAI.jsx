import { useState, useEffect } from "react"
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {Box, Typography, Input, Button, Card, CardContent, ButtonGroup  } from '@mui/material'
import {removeDataUri}  from './auth/authSlice';
const ariaLabel = { 'aria-label': 'description' };
const { Configuration, OpenAIApi } = require("openai");

const OpenAI = ({ocr}) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [dish, setDish] = useState("")
  const dispatch = useDispatch()
  const dataUri = useSelector(state=> state.dataUri.dataUri)
const navigate = useNavigate()
  const handleNewSearch = () => { 
    setDish("")
  }

  const handleBack = () => {
    dispatch(removeDataUri())
    navigate("/pairing")
  }
  

  const handleSubmit = async () => {
    
    setLoading(true);
   
    try {
       
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Given these wines: ${ocr}. Which 2 would you recommend if I am eating ${dish}?`,
        temperature: 0.7,
        max_tokens: 2000,
   
        
      });
      
      setApiResponse(result.data.choices[0].text);
    } catch (err) {
    
      setApiResponse("Something is going wrong, Please try again.");
    }
   
      setLoading(false);
    
    
  };
  return(
    <>
    <Box>
        <Typography sx={{marginLeft:"1%"}} variant="h6">What dish would you like to pair?</Typography>
    <br/>
   <Input placeholder="Input dish" sx={{marginLeft:"1%"}} inputProps={ariaLabel} onChange={(e)=>setDish(e.target.value)}/>
    <Button onClick={handleSubmit}  variant='contained' aria-label='outlined primary button group' >submit</Button>
        </Box>

<br/>
<br/>
  <Box>
    <Card>

      <CardContent>
        <Typography 
        variant="h4"
        sx={{mb: "2.5"}}>
          Pairing Suggestions

        </Typography>
        <br/>
        <Typography
         sx={{ fontSize: 16 }} >

        {apiResponse}
        </Typography>
      </CardContent>
    </Card>
  </Box>
  <br/>
  <Box>
    <ButtonGroup>
      <Button variant='contained' aria-label='outlined primary button group' onClick={handleBack}>Back to Camera</Button>
      <Button variant='contained' aria-label='outlined primary button group' onClick={handleNewSearch}>New Search</Button>
    </ButtonGroup>
  </Box>

    </>
  );
};
  export default OpenAI;