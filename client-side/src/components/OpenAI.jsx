import { useState } from "react"
const { Configuration, OpenAIApi } = require("openai");

const OpenAI = ({ocr}) => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [dish, setDish] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
   
    try {
       
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Given these wines: ${ocr}. Which 2 would you recommend if I am eating ${dish}?`,
        temperature: 0.7,
        max_tokens: 2000,
   
        
//       });
      
      setApiResponse(result.data.choices[0].text);
    } catch (err) {
    
//       setApiResponse("Something is going wrong, Please try again.");
//     }
   
//       setLoading(false);
    
    
  };
  return(
    <>
<form onSubmit={handleSubmit} >
                <input placeholder="What dish?" onChange={e=>setDish(e.target.value)}></input>
                <button >Submit</button>
                </form>
<div>
  {apiResponse}
</div>
    </>
  );
};
  export default OpenAI;