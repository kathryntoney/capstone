import React, { useEffect } from 'react'
import { Box, Typography, TextField, Button, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useSelector, useDispatch } from 'react-redux'
import { checkToken } from './auth/authSlice'

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
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)
    console.log('main', token)

    useEffect(() => {
        if (localStorage.token) {
            dispatch(checkToken())
        }
    }, [])

    //   useEffect(() => {
    //     if (!isLoading && token) {
    //       navigate('/')
    //     }
    //   }, [token])

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
