import React, { useEffect, useState } from "react";
import Tesseract from 'tesseract.js'
import OpenAI from './OpenAI'
import { Form } from "react-router-dom";

const MenuReader = ({dataUri}) => {
    const [ocr, setOcr] = useState("");
    // const [imageData, setImageData] = useState(dataUri);
const [dish, setDish] = useState('')

Tesseract.recognize(dataUri)
    .then(function(result){
        console.log(result)
        setOcr(result.data.text)
        console.log(ocr)
    })


    const handleSubmit = (e) => {
            e.preventDefault()

     }

  return (
    <>
    <div>
        {ocr}
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>(setDish(e.target.value))}>What will you be eating tonight?</input>
            <button>submit</button>
        </form>
       
       {
           <div>
       ({ocr} && {dish})?
            <OpenAI ocr={ocr} dish={dish}/>
        </div>
    }:
   
    </div>
    </>
  )
}

export default MenuReader