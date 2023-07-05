import React, { useState } from 'react'
import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {styled} from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

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

const AddPost = () => {
    const [open, setOpen] = useState(false)
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
                        placeholder="What's on your mind?"
                        variant='standard'
                    />
                    <Stack direction='row' gap={1} mt={2} mb={3}>
                        <EmojiEmotionsIcon color='primary' />
                        <ImageIcon color='secondary' />
                        <VideoCameraBackIcon color='success' />
                        <PersonAddIcon color='error' />
                    </Stack>
                    <ButtonGroup variant='contained' aria-label='outlined primary button group' fullWidth>
                        <Button>Post</Button>
                        <Button><DateRangeIcon /></Button>
                        <Button onClick={e => setOpen(false)}>Cancel</Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default AddPost
