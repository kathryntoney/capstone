import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Cloudinary } from '@cloudinary/url-gen'
import Axios from 'axios'

const StyledTextField = styled(TextField)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const Registration = () => {
    const [imageSelected, setImageSelected] = useState('')
    const uploadImage = () => {
        console.log(imageSelected)
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("folder", 'pocketsomm-users')
        formData.append("upload_preset", "yhxzftqb")
        Axios.post("https://api.cloudinary.com/v1_1/ktprojects/image/upload", formData).then((response) => {
            console.log(response)
        })
    }


    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledTextField placeholder='username' />
                <StyledTextField placeholder='email' />
                <StyledTextField placeholder='password' />
                <p>Upload profile picture (optional):</p>
                <input type='file' onChange={(e) => { setImageSelected(e.target.files[0]) }}></input>
                <Button variant='contained' onClick={uploadImage}>Submit</Button>
            </Box>
        </>
    )
}

export default Registration
