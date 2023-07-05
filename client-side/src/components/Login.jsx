import React, { useState } from 'react'
import { Box, Typography, TextField, Modal, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import Registration from './Registration'

const StyledTextField = styled(TextField)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
})

const Login = () => {
    const [openRegistration, setOpenRegistration] = useState(false)

    return (
        <>
            <Typography variant='h5' sx={{ fontFamily: "'Nunito', sans - serif", display: 'flex', justifyContent: 'center', marginTop: '10px' }}>Login:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledTextField placeholder='email' />
                <StyledTextField placeholder='password' />
            </Box>
            <Box>
                <Typography variant='h5' sx={{ fontFamily: "'Nunito', sans - serif", display: 'flex', justifyContent: 'center', marginTop: '10px' }}><a href='#' onClick={e => setOpenRegistration(true)}>First time here?</a></Typography>
                <StyledModal
                    open={openRegistration}
                    onClose={e => setOpenRegistration(false)}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box width={400} height={350} bgcolor='white' p={3} borderRadius={5}>
                        <Typography variant='h6' textAlign='center'>Register Now:</Typography>
                        <Registration />
                    </Box>
                </StyledModal>
            </Box>
        </>
    )
}

export default Login
