import React, { useState } from 'react';
import dotenv from 'dotenv';
import { useDispatch } from 'react-redux';
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();

const OpenAI = ({dish}, {ocr}) => {
    const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);
    const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
   
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Given these wines: ${ocr}. Which 2 would you recommend if I am eating ${dish}?`,
        temperature: 0.7,
        max_tokens: 2000,
   
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        
      });
      
      setApiResponse();
    } catch (err) {
    
      setApiResponse("Something is going wrong, Please try again.");
    }
   
      setLoading(false);
    
    
  };
  return(
    <>

<div>
  {apiResponse}
</div>
    </>
  );
};
  export default OpenAI;