import React from 'react'
import { Box, Typography, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const Login = () => {
    return (
        <>
            <Typography variant='h5' sx={{ fontFamily: "'Nunito', sans - serif", display: 'flex', justifyContent: 'center', marginTop: '10px' }}>Login:</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledTextField placeholder='email' />
                <StyledTextField placeholder='password' />
            </Box>
            <Box>
            </Box>
        </>
    )
}

export default Login
