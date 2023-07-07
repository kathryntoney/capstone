import React from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTypography = styled(Typography)({
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    fontFamily: "'Nunito', sans - serif",
    fontFamily: "'Roboto Mono', monospace",
    marginTop: '10px'
})

const StyledButton = styled(Button)({
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    margin: '5px',
    width: '80vw'
})

const Main = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <StyledTypography variant='h5' sx={{ display: 'flex', }}>What would you like to do?</StyledTypography>
                <StyledButton variant='contained'>Get help with a pairing</StyledButton>
                <StyledButton variant='contained'>View wine list</StyledButton>
            </Box>
        </>
    )
}

export default Main
