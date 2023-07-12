import React, { useEffect } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    width: '80vw', 
   color:'#5C374C'
})

const Main = () => {
    const dispatch = useDispatch()
    const isLoading = (state => state.isLoading)
    const token = localStorage.token
    const navigate = useNavigate()
    console.log('main', token)

    useEffect(() => {
        if (!isLoading && token) {
            navigate('/')
        }
    }, [token])

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <StyledTypography variant='h5' sx={{ display: 'flex', }}>What would you like to do?</StyledTypography>
                <StyledButton variant='contained' href='/photo'>Get help with a pairing</StyledButton>
                <StyledButton variant='contained' href='/wines'>View wine list</StyledButton>
            </Box>
        </>
    )
}

export default Main
