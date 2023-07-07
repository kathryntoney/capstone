import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add';
import { addWine } from './auth/authSlice'
import Axios from 'axios'

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})

// const UserBox = styled(Box)({
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     marginBottom: '20px'
// })

const AddWine = () => {
    const [open, setOpen] = useState(false)
    const [picture, setPicture] = useState('')
    const [imageSelected, setImageSelected] = useState('')
    const [notes, setNotes] = useState('')
    const isLoading = useSelector(state => state.isLoading)
    const token = useSelector(state => state.token)
    console.log('addwine ', token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(imageSelected)
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("folder", 'pocketsomm-wines')
        formData.append("upload_preset", "yhxzftqb")
        const response = await Axios.post("https://api.cloudinary.com/v1_1/ktprojects/image/upload", formData)
        console.log(response.data.url)
        const pictureURL = response.data.url
        setPicture(pictureURL)
        const data = {
            picture: pictureURL,
            notes
        }
        dispatch(addWine({ formData: data }))
        setOpen(false)
        navigate('/wines')
    }


    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title='New Post' sx={{ position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color='primary' aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
                    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
                    <Box>
                        <Avatar src='https://media.licdn.com/dms/image/D5635AQF5L1U9InOswA/profile-framedphoto-shrink_200_200/0/1680273766602?e=1688677200&v=beta&t=ItAk7-TVMDb0VjWon5r422sFqkWOrdaLJ77REI-wD_w'
                            sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant='span'>Katie Toney</Typography>
                    </Box>
                    <TextField
                        sx={{ width: '100%' }}
                        id='standard-multiline-static'
                        rows={4}
                        placeholder="Enter notes about your wine here"
                        variant='standard'
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    {/* <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack> */}
                    <input type='file' onChange={(e) => { setImageSelected(e.target.files[0]) }}></input>
                    <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
                        <Button onClick={handleSubmit}>Submit</Button>
                        <Button onClick={e => setOpen(false)}>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddWine
