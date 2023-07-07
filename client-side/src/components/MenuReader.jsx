import React, { useEffect, useState } from "react";
import Tesseract from 'tesseract.js'
import OpenAI from './OpenAI'


const MenuReader = ({dataUri}) => {
    const [ocr, setOcr] = useState("");
 
const [dish, setDish] = useState('')
const [ask, setAsk]= useState(false)
Tesseract.recognize(dataUri)
    .then(function(result){
      
        setOcr(result.data.text)
        console.log(ocr)
    })


    const handleSubmit = (e) => {
            e.preventDefault()
        setAsk(true)
        console.log(dish, "submit")
     }

   
     

  return (
    <>
    <div>
        {/* {ocr} */}
        
            <div>
                

               
                
                 <div>
                 <OpenAI ocr={ocr}  />
                    </div>
                    

            </div>
           
        
    </div>
    </>
  )
}

export default MenuReader